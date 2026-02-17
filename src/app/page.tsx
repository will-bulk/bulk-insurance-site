import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const TruckIcon = () => (
  <svg className="w-7 h-7 text-primary-700 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-7 h-7 text-primary-700 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-7 h-7 text-primary-700 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const BoxIcon = () => (
  <svg className="w-7 h-7 text-primary-700 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const ClipboardIcon = () => (
  <svg className="w-7 h-7 text-primary-700 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-7 h-7 text-primary-700 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/truck-photo.avif)' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/85 to-primary-950/70" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
              Trusted by 10,000+ Bulk Haulers Nationwide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-[1.1]">
              Trucking Insurance<br />
              Built for<br />
              <span className="text-brand-green">Bulk Haulers.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              The industry leader in bulk trucking insurance. We know your business, your commodities, and your customers — because that&apos;s all we do.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/get-quote" className="bg-brand-green hover:bg-brand-green-dark text-white font-bold text-lg py-4 px-10 rounded-lg shadow-xl shadow-brand-green/25 transition-all duration-200">
                Get a Free Quote
              </Link>
              <a href="tel:8169861120" className="btn-outline text-lg py-4 px-10">
                Call (816) 986-1120
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-medium">20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-medium">Multiple A-Rated Carriers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-medium">Bulk Hauling Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">20+</div>
              <div className="text-navy-500 mt-1 font-medium">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">10,000+</div>
              <div className="text-navy-500 mt-1 font-medium">Haulers Insured</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-navy-900">50+</div>
              <div className="text-navy-500 mt-1 font-medium">Insurance Carriers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-brand-green">$24K+</div>
              <div className="text-navy-500 mt-1 font-medium">Avg. Client Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bulk Insurance */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">Why Bulk Haulers Choose Us</h2>
            <p className="section-subheading">
              We&apos;re not a general insurance agency that dabbles in trucking. Bulk commodity hauling is all we do — and we&apos;re the best at it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">We Shop 50+ Carriers</h3>
              <p className="text-navy-600 leading-relaxed">We have access to more insurance carriers than the average agency. More options means better rates and better coverage for you.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Save Thousands Annually</h3>
              <p className="text-navy-600 leading-relaxed">Our clients save an average of $24,000+ on annual premiums. We know what carriers want to see from bulk haulers — and we position you to win.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Old-Fashioned Service</h3>
              <p className="text-navy-600 leading-relaxed">Need a certificate on the weekend? Have a claims question at 7pm? We pick up the phone. Real people, real relationships, real service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">Insurance Products</h2>
            <p className="section-subheading">
              Every coverage a bulk hauler needs — all from one agency. No generalists. No runaround.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<TruckIcon />}
              title="Trucking Insurance"
              description="Full-spectrum commercial trucking coverage for owner-operators and fleets hauling bulk commodities."
              href="/products/trucking-insurance"
            />
            <ServiceCard
              icon={<BoxIcon />}
              title="Cargo & Freight"
              description="Protect your loads in transit — grain, feed, fertilizer, aggregate, and every bulk commodity."
              href="/products/cargo-insurance"
            />
            <ServiceCard
              icon={<UsersIcon />}
              title="Fleet Insurance"
              description="Multi-truck fleet solutions with volume discounts and simplified management for growing operations."
              href="/products/fleet-insurance"
            />
            <ServiceCard
              icon={<ShieldIcon />}
              title="General Liability"
              description="Business liability protection for your trucking operation against third-party claims."
              href="/products/general-liability"
            />
            <ServiceCard
              icon={<ClipboardIcon />}
              title="Workers Compensation"
              description="Employee injury protection covering medical expenses and lost wages for your drivers and staff."
              href="/products/workers-compensation"
            />
            <ServiceCard
              icon={<ScaleIcon />}
              title="Surety Bonds"
              description="BMC-84 and BMC-85 surety bonds required for FMCSA compliance and broker authority."
              href="/products/surety-bonds"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/products/trucking-insurance" className="text-brand-green hover:text-brand-green-dark font-semibold text-lg inline-flex items-center gap-2 transition-colors">
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trailer Types */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Specialized Coverage by Trailer Type</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Every bulk trailer has unique risks. We have specific programs for each type.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Hopper Bottoms', href: '/products/hopper-bottom-insurance', desc: 'Grain, feed, fertilizer', icon: '/images/trailer-hopper.png' },
              { name: 'End Dumps', href: '/products/end-dump-insurance', desc: 'Aggregate, sand, gravel', icon: '/images/trailer-end-dump.png' },
              { name: 'Pneumatics', href: '/products/pneumatic-insurance', desc: 'Dry bulk, cement, powder', icon: '/images/trailer-pneumatic.png' },
              { name: 'Tankers', href: '/products/tanker-insurance', desc: 'Liquid, fuel, chemicals', icon: '/images/trailer-tanker.png' },
              { name: 'Walking Floors', href: '/products/walking-floor-insurance', desc: 'Biomass, waste, recyclables', icon: '/images/trailer-walking-floor.png' },
              { name: 'Belt Trailers', href: '/products/trucking-insurance', desc: 'Specialty bulk hauling', icon: '/images/trailer-belt.png' },
            ].map((trailer) => (
              <Link
                key={trailer.name}
                href={trailer.href}
                className="group bg-primary-900 hover:bg-primary-800 rounded-xl p-6 transition-all duration-300 border border-primary-800 hover:border-brand-green flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-primary-800 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-700 transition-colors">
                  <img src={trailer.icon} alt={trailer.name} className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-green transition-colors">{trailer.name}</h3>
                  <p className="text-gray-500 text-sm">{trailer.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By / Partner logos */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-navy-500 font-medium uppercase tracking-wider text-sm">Trusted by haulers who work with</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {[
              { name: 'ADM', logo: '/images/logo-adm.png' },
              { name: 'CHS', logo: '/images/logo-chs.png' },
              { name: 'Viterra', logo: '/images/logo-viterra.png' },
              { name: 'Bartlett', logo: '/images/logo-bartlett.png' },
              { name: 'Forest Brook', logo: '/images/logo-forest.png' },
              { name: 'AG Partners', logo: '/images/logo-agpartners.png' },
            ].map((company) => (
              <div key={company.name} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <img src={company.logo} alt={company.name} className="h-10 md:h-12 w-auto object-contain" />
              </div>
            ))}
            {['Cargill', 'Bunge'].map((company) => (
              <span key={company} className="text-2xl font-bold text-gray-300 hover:text-gray-500 transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">What Our Clients Say</h2>
            <p className="section-subheading">
              Don&apos;t just take our word for it — hear from haulers who made the switch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="BulkLoads Insurance saved me over $24k on my annual premium. If you haul bulk commodities, these are your people."
              name="William Hill"
              company="William Hill Trucking"
              location="Billings, MT"
            />
            <TestimonialCard
              quote="I was able to get direct connections with shippers like ADM and CHS through BulkLoads, and their insurance team made sure I was covered properly for every load."
              name="Rob Grover"
              company="Owner-Operator"
              location="Midwest"
            />
            <TestimonialCard
              quote="Best insurance agency I've ever worked with. They understand bulk hauling and don't try to fit you into a general trucking policy. The savings were unreal."
              name="Jesse Runions"
              company="Bulk Carrier"
              location="Oklahoma"
            />
          </div>
        </div>
      </section>

      {/* BulkLoads Connection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/conference-2026.jpg"
                alt="2026 Bulk Freight Conference"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-brand-green/20 text-brand-green px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Part of the BulkLoads Family
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Powered by BulkLoads.com
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-6">
                Bulk Insurance Group is a proud member of the BulkLoads.com family of companies — the #1 bulk freight load board in North America. We leverage our deep industry connections and understanding of the bulk hauling market to get you the best coverage at the best rates.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://bulkloads.com" target="_blank" rel="noopener noreferrer" className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Visit BulkLoads.com
                </a>
                <a href="https://www.youtube.com/@BulkLoadsVids" target="_blank" rel="noopener noreferrer" className="text-navy-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 hover:border-brand-green transition-colors">
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Community Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/bulk-freight-conference.jpg" alt="Bulk Freight Conference" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/red-fleet.jpg" alt="Custom fleet" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/timpte-manufacturing.jpg" alt="Timpte trailer manufacturing" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/tri-state-commodities.jpg" alt="Tri-State Commodities" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Save on Insurance?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 10,000+ bulk haulers who trust Bulk Insurance Group for their coverage. Get your free, no-obligation quote in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-quote" className="bg-white text-brand-green-dark font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:8169861120" className="border-2 border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Call (816) 986-1120
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
