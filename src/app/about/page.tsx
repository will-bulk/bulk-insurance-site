import { Metadata } from 'next';
import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Bulk Insurance Group — the industry leader in bulk trucking insurance. Over 20 years of experience, trusted by 10,000+ haulers nationwide.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative text-white overflow-hidden min-h-[500px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/open-highway.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/85 to-primary-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 w-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-green/20 text-brand-green px-4 py-1 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Built for Bulk Haulers.<br />
              <span className="text-brand-green">By People Who Get It.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Bulk Insurance Group isn&apos;t just another insurance agency. We&apos;re specialists — bulk trucking is all we do, and we&apos;ve been doing it for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Bulk Insurance Group was founded on a simple observation: bulk commodity haulers were being underserved by the insurance industry. General agencies didn&apos;t understand the unique risks of hauling grain in a hopper bottom, aggregate in an end dump, or cement in a pneumatic.
                </p>
                <p>
                  We set out to change that. By focusing exclusively on bulk trucking insurance, we built deep expertise in the commodities, equipment, and operations that matter to our clients.
                </p>
                <p>
                  Today, as a proud member of the BulkLoads.com family of companies, we leverage the largest network in bulk freight to deliver insurance solutions that no general agency can match. Our team understands your business because we live and breathe the bulk hauling industry every single day.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/team-photo.avif"
                  alt="Ed Bunnel and Jared from Bulk Insurance Group"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-primary-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-900">20+</div>
                    <div className="text-navy-500 mt-1 text-sm font-medium">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-900">10K+</div>
                    <div className="text-navy-500 mt-1 text-sm font-medium">Haulers Insured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-900">50+</div>
                    <div className="text-navy-500 mt-1 text-sm font-medium">Carrier Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-green">$24K+</div>
                    <div className="text-navy-500 mt-1 text-sm font-medium">Avg. Savings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Photo Grid */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading">Deep in the Bulk Hauling Industry</h2>
            <p className="section-subheading">From farm to fleet, we&apos;re embedded in the bulk freight community.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md row-span-2">
              <img src="/images/truck-highway.jpg" alt="Semi truck on highway" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/grain-elevator.jpg" alt="Grain elevator" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/construction-site.jpg" alt="Construction site" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/farm-landscape.jpg" alt="Farm landscape" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/grain-field.jpg" alt="Grain field at harvest" className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Old-Fashioned Service</h3>
              <p className="text-navy-600 leading-relaxed">We believe in picking up the phone, knowing your name, and treating every client like family. Insurance is a relationship, not a transaction.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Deep Industry Expertise</h3>
              <p className="text-navy-600 leading-relaxed">We don&apos;t just sell trucking insurance — we understand bulk commodities, trailer types, and the day-to-day reality of running a hauling operation.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Client-First Advocacy</h3>
              <p className="text-navy-600 leading-relaxed">When you have a claim, we fight for you. When renewal comes, we shop the market aggressively. Your interests always come first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Team</h2>
            <p className="section-subheading">Industry professionals dedicated to protecting bulk haulers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold text-primary-400">LK</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900">Levi Keatts</h3>
              <p className="text-brand-green font-medium">Insurance Producer</p>
              <p className="text-navy-500 text-sm mt-2">Specializing in bulk trucking insurance with deep knowledge of commodity-specific coverage needs.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold text-primary-400">BW</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900">Brett Williams</h3>
              <p className="text-brand-green font-medium">Sales Manager</p>
              <p className="text-navy-500 text-sm mt-2">Leading our sales team with a focus on building long-term relationships with bulk haulers nationwide.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-3xl font-bold text-primary-400">JF</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900">Jared Flinn</h3>
              <p className="text-brand-green font-medium">Industry Relations</p>
              <p className="text-navy-500 text-sm mt-2">Connecting with the bulk hauling community through BulkLoads and building industry partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube / Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-green/20 text-brand-green px-4 py-1 rounded-full text-sm font-semibold mb-4">
                BulkLoads Community
              </div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">See Our Community in Action</h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                Through the BulkLoads YouTube channel, we connect with thousands of bulk haulers across the country. Watch real stories from real operators — the people we insure every day.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brand-green shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-navy-700 font-medium">100+ Member Feature Videos</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brand-green shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-navy-700 font-medium">Weekly Bulk Freight Market Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brand-green shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-navy-700 font-medium">Annual Bulk Freight Conference</span>
                </div>
              </div>
              <a href="https://www.youtube.com/@BulkLoadsVids" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                Subscribe on YouTube
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src="/images/semi-truck-sunset.jpg" alt="Semi truck on the road" className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src="/images/truck-fleet-lot.jpg" alt="Fleet of trucks" className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src="/images/road-sunset.jpg" alt="Open road at sunset" className="w-full h-40 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src="/images/industrial-plant.jpg" alt="Industrial facility" className="w-full h-40 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">Client Testimonials</h2>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With the Best?</h2>
          <p className="text-xl text-white/90 mb-8">Join thousands of bulk haulers who trust Bulk Insurance Group.</p>
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
    </>
  );
}
