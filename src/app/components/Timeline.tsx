'use client';

import { motion } from 'framer-motion';

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
  return (
    <div className="relative container mx-auto w-full">
      {/* Center line for desktop, left line for mobile */}
      <div className="absolute w-1 h-full bg-primary/20 md:left-1/2 left-4 md:transform md:-translate-x-1/2"></div>

      {events.map((event, index) => (
        <div
          key={event.year}
          className="relative flex md:flex-row flex-col w-full mb-8 md:mb-16"
        >
          {/* Year indicator - centered for desktop, left for mobile */}
          <div className="absolute w-6 h-6 md:left-1/2 left-4 transform md:-translate-x-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
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
