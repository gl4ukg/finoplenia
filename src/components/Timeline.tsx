'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  isGerman?: boolean;
}

export function Timeline({ events, isGerman = false }: TimelineProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative container mx-auto w-full overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 hidden md:block">
        {/* Clock Icon */}
        <motion.div
          className="absolute top-[-80px] left-[10%] text-primary/20"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.05}px)`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </motion.div>

        {/* Calendar Icon */}
        <motion.div
          className="absolute top-0 right-[0%] text-primary/10"
          style={{
            transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.06}px) rotate(${scrollY * 0.02}deg)`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
        </motion.div>

        {/* Trophy Icon */}
        <motion.div
          className="absolute bottom-60 left-[30%] text-primary/15"
          style={{
            transform: `translate(${scrollY * -0.12}px, ${scrollY * -0.08}px) rotate(${scrollY * -0.03}deg)`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
          </svg>
        </motion.div>

        {/* Flag Icon */}
        <motion.div
          className="absolute bottom-20 right-[40%] text-primary/20"
          style={{
            transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px) rotate(${scrollY * 0.04}deg)`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
          </svg>
        </motion.div>
      </div>

      {/* Center line for desktop, left line for mobile */}
      <div className="absolute w-1 h-full bg-primary md:left-1/2 left-4 md:transform md:-translate-x-1/2"></div>

      {events.map((event, index) => (
        <div
          key={event.year}
          className="relative z-20 flex md:flex-row flex-col w-full mb-8 md:mb-16"
        >
          {/* Year indicator - centered for desktop, left for mobile */}
          <div className="absolute w-9 h-9 md:left-1/2 left-0.5 transform md:-translate-x-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-white">{event.year}</span>
              </div>
            </motion.div>
          </div>

          {/* Content card - always on right for mobile, alternating for desktop */}
          <div className={`w-full pl-12 md:w-1/2 ${
            index % 2 === 0 
              ? 'md:pr-8 md:pl-0' 
              : 'md:pl-8 md:ml-auto'
          }`}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}>
                <h3 className="text-lg font-bold text-primary mb-1">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
