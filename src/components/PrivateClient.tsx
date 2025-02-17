'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import Image from 'next/image';
import Link from 'next/link';

interface ContentSectionProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

export function ContentSection({ id, title, description, imageSrc, imageAlt, imagePosition }: ContentSectionProps) {
  const contentOrder = imagePosition === 'left' ? 'md:order-2' : '';
  const imageOrder = imagePosition === 'left' ? 'md:order-1' : '';

  return (
    <div id={id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-20">
      <div className={contentOrder}>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className={imageOrder}>
        <div className="relative w-full h-[300px]">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}

interface Props {
  dict: any
}

export function PrivateClient({ dict }: Props) {


  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      
      <HeroSection
        title={dict.private.hero.title}
        description={dict.private.hero.description}
        className="bg-primary relative bg-gradient-to-b from-primary/5 to-white"
      />

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        {dict.private.sections.map((section: any, index: number) => (
          <ContentSection
            key={section.title}
            {...section}
            imagePosition={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </section>
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.private.services.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
            {dict.private.services.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dict.private.services.items.map((service: any, index: number) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="relative isolate overflow-hidden bg-primary px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {dict.cta.title}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                {dict.cta.description}
              </p>
              <div className="mt-10">
                <Link
                  href={`/contact`}
                  className="btn bg-white text-primary hover:bg-gray-100"
                >
                  {dict.cta.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
