'use client';

import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapContentProps {
  address: string;
}

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapContent({ address }: MapContentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: false,
      scrollWheelZoom: false,
      fadeAnimation: true,
      zoomAnimation: true
    });
    
    mapInstanceRef.current = map;

    // Add zoom control to top-right
    L.control.zoom({
      position: 'topright'
    }).addTo(map);

    // Add OpenStreetMap tiles with a more muted style
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors, © CARTO'
    }).addTo(map);

    // Set initial view to a wider area
    map.setView([47.3769, 8.5417], 13);

    // Geocode address using OpenStreetMap Nominatim
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
      .then(response => response.json())
      .then(data => {
        if (data && data[0]) {
          const { lat, lon } = data[0];
          const coordinates = [parseFloat(lat), parseFloat(lon)] as L.LatLngExpression;

          // Remove existing marker if any
          if (markerRef.current) {
            markerRef.current.remove();
          }

          // Add new marker
          const marker = L.marker(coordinates).addTo(map);
          markerRef.current = marker;

          // Add popup with address
          marker.bindPopup(`
            <div style="font-family: system-ui, -apple-system, sans-serif; padding: 8px;">
              <h3 style="font-weight: 600; margin: 0 0 4px;">Finoplenia</h3>
              <p style="margin: 0; color: #6b7280;">${address}</p>
            </div>
          `);

          // Smoothly animate to the location
          map.flyTo(coordinates, 15, {
            duration: 1.5
          });

          marker.openPopup();
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Error geocoding address:', error);
        setIsLoading(false);
      });

    // Ensure map is properly sized
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [address]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full transition-opacity duration-500"
      style={{ 
        opacity: isLoading ? 0.5 : 1,
        background: '#f5f7fa'
      }}
    />
  );
}
