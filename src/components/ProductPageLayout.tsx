import Link from 'next/link';

interface Feature {
  title: string;
  description: string;
}

interface ProductPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  coverages: string[];
  ctaText?: string;
  relatedProducts: { label: string; href: string }[];
  heroImage?: string;
  secondaryImage?: string;
  trailerIcon?: string;
}

export default function ProductPageLayout({
  title,
  subtitle,
  description,
  features,
  coverages,
  ctaText = 'Get a free quote today and see how much you could save.',
  relatedProducts,
  heroImage,
  secondaryImage,
  trailerIcon,
}: ProductPageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[500px] flex items-center">
        {heroImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        <div className={`absolute inset-0 ${heroImage ? 'bg-gradient-to-r from-primary-950/95 via-primary-950/85 to-primary-950/70' : 'bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950'}`} />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {trailerIcon && <img src={trailerIcon} alt="" className="w-6 h-6 object-contain" />}
              {subtitle}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/get-quote" className="btn-primary text-lg py-4 px-10">Get a Free Quote</Link>
              <a href="tel:8169861120" className="btn-outline text-lg py-4 px-10">Call (816) 986-1120</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features with optional image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`${secondaryImage ? 'grid lg:grid-cols-2 gap-16 items-start' : ''}`}>
            <div>
              <h2 className="section-heading">Why Choose Bulk Insurance Group?</h2>
              <p className="section-subheading mb-12">We specialize exclusively in bulk trucking — nobody knows your business better.</p>
              <div className="grid md:grid-cols-2 gap-6">
                {features.slice(0, 4).map((feature, i) => (
                  <div key={i} className="bg-primary-50 rounded-xl p-6">
                    <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                    <p className="text-navy-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {secondaryImage && (
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl sticky top-28">
                  <img
                    src={secondaryImage}
                    alt={title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-6 bg-primary-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-navy-900">$24K+</div>
                  <div className="text-navy-500 mt-1 text-sm font-medium">Average Client Savings</div>
                  <div className="mt-4 text-3xl font-bold text-brand-green">50+</div>
                  <div className="text-navy-500 mt-1 text-sm font-medium">Insurance Carriers</div>
                </div>
              </div>
            )}
          </div>
          {/* Remaining features below the image area */}
          {features.length > 4 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {features.slice(4).map((feature, i) => (
                <div key={i + 4} className="bg-primary-50 rounded-xl p-6">
                  <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{i + 5}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Coverages */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-heading text-center">Coverages Included</h2>
          <p className="section-subheading text-center mb-12">Comprehensive protection tailored for bulk hauling operations.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {coverages.map((coverage, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-5 h-5 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-navy-900 font-medium">{coverage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube / Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/bulk-freight-conference.jpg"
                alt="BulkLoads Bulk Freight Conference"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-brand-green/20 text-brand-green px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Part of the BulkLoads Family
              </div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Backed by the Biggest Name in Bulk Freight</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Bulk Insurance Group is proud to be part of the BulkLoads.com family — the #1 bulk freight load board in North America. Our deep roots in the industry mean we understand your business, your commodities, and your risks like no one else.
              </p>
              <div className="flex gap-4">
                <a href="https://bulkloads.com" target="_blank" rel="noopener noreferrer" className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Visit BulkLoads.com
                </a>
                <a href="https://www.youtube.com/@BulkLoadsVids" target="_blank" rel="noopener noreferrer" className="text-navy-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:border-brand-green transition-colors">
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Protected Today</h2>
          <p className="text-xl text-white/90 mb-8">{ctaText}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-quote" className="bg-white text-brand-green-dark font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:8169861120" className="border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white/10 transition-colors text-lg">
              (816) 986-1120
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">Related Products</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedProducts.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-primary-50 hover:bg-primary-100 text-navy-900 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {product.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
