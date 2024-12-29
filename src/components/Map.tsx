'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

interface MapProps {
  address: string;
}

// Dynamically import the Map component with no SSR
const MapComponent = dynamic(() => import('./MapContent'), {
  ssr: false,
  loading: () => (
    <div 
      className="w-full h-full"
      style={{ background: '#f5f7fa' }}
    />
  )
});

export default function Map({ address }: MapProps) {
  return (
    <div className="absolute inset-0">
      <MapComponent address={address} />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: '#7663fb12'
          // background: '#1118276e'
        }}
      />
    </div>
  );
}
