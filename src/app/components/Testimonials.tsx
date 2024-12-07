'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  isGerman?: boolean;
}

export function Testimonials({ testimonials, isGerman = false }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-center mb-12'>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {isGerman ? 'Was unsere Kunden sagen' : 'What our clients say'}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {isGerman
                ? 'Erfahren Sie, wie wir unseren Kunden geholfen haben, ihre finanziellen Ziele zu erreichen.'
                : `Discover how we've helped our clients achieve their financial goals.`}
            </p>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center relative h-24 w-24 mx-auto mb-8">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <blockquote>
                  <p className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  <div className="mt-8">
                    <div className="font-semibold text-gray-900">{testimonials[activeIndex].name}</div>
                    <div className="text-gray-600">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </div>
                  </div>
                </blockquote>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={isGerman ? 'Vorheriges Testimonial' : 'Previous testimonial'}
                >
                  <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={isGerman ? 'Nächstes Testimonial' : 'Next testimonial'}
                >
                  <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Dots */}
              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                      index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
