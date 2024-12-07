import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonHref: string;
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref,
  secondaryButtonHref,
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="relative isolate overflow-hidden bg-primary px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              {description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={primaryButtonHref}
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                {primaryButtonText}
              </Link>
              <Link
                href={secondaryButtonHref}
                className="btn text-white border-2 border-white hover:bg-white hover:text-primary"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
