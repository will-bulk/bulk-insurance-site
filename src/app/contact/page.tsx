import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Bulk Insurance Group for bulk trucking insurance quotes, claims, certificates, and policy changes. Call (816) 986-1120.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/trucker-story.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/85 to-primary-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a question? Need a quote? Want to make a policy change? We&apos;re here to help. Reach out by phone, email, or use the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">Phone</h3>
                    <a href="tel:8169861120" className="text-brand-green hover:text-brand-green-dark font-medium text-lg">(816) 986-1120</a>
                    <p className="text-navy-500 text-sm mt-1">Monday - Friday, 8am - 5pm CST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">Email</h3>
                    <a href="mailto:info@bulkinsurancegroup.com" className="text-brand-green hover:text-brand-green-dark font-medium">info@bulkinsurancegroup.com</a>
                    <p className="text-navy-500 text-sm mt-1">We respond within 1 business day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900">Office</h3>
                    <p className="text-navy-600">Kansas City, MO</p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-navy-900 mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/get-quote" className="bg-primary-50 hover:bg-primary-100 text-navy-900 font-medium py-3 px-4 rounded-lg transition-colors text-sm text-center">
                    Get a Quote
                  </Link>
                  <a href="#claims" className="bg-primary-50 hover:bg-primary-100 text-navy-900 font-medium py-3 px-4 rounded-lg transition-colors text-sm text-center">
                    Submit a Claim
                  </a>
                  <a href="#certificates" className="bg-primary-50 hover:bg-primary-100 text-navy-900 font-medium py-3 px-4 rounded-lg transition-colors text-sm text-center">
                    Request Certificate
                  </a>
                  <a href="#policy-changes" className="bg-primary-50 hover:bg-primary-100 text-navy-900 font-medium py-3 px-4 rounded-lg transition-colors text-sm text-center">
                    Policy Changes
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-navy-50 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">First Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Email *</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">How Can We Help? *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all bg-white">
                    <option value="">Select a topic...</option>
                    <option value="quote">Get a Quote</option>
                    <option value="claim">Submit a Claim</option>
                    <option value="certificate">Request Certificate</option>
                    <option value="policy">Policy Change</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Message *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 outline-none transition-all resize-none" placeholder="Tell us about your insurance needs..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full text-lg">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service sections */}
      <section id="claims" className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Submit a Claim</h2>
          <p className="text-navy-600 leading-relaxed mb-6">
            If you&apos;ve been involved in an accident or incident, contact us immediately. Our claims team will guide you through the process and advocate on your behalf with the insurance carrier.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="font-semibold text-navy-900 mb-2">For immediate claims assistance:</p>
            <a href="tel:8169861120" className="text-brand-green hover:text-brand-green-dark font-bold text-xl">(816) 986-1120</a>
            <p className="text-navy-500 text-sm mt-2">Or email: <a href="mailto:claims@bulkinsurancegroup.com" className="text-brand-green">claims@bulkinsurancegroup.com</a></p>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Request a Certificate of Insurance</h2>
          <p className="text-navy-600 leading-relaxed mb-6">
            Need a COI for a shipper or broker? We issue certificates quickly — often same-day, and even on weekends when you need to keep moving.
          </p>
          <div className="bg-primary-50 rounded-xl p-6">
            <p className="text-navy-900">Call us at <a href="tel:8169861120" className="text-brand-green font-bold">(816) 986-1120</a> or email <a href="mailto:certificates@bulkinsurancegroup.com" className="text-brand-green font-medium">certificates@bulkinsurancegroup.com</a> with the certificate holder information.</p>
          </div>
        </div>
      </section>

      <section id="policy-changes" className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Policy Changes</h2>
          <p className="text-navy-600 leading-relaxed mb-6">
            Need to add a driver, vehicle, or make changes to your policy? Contact us and we&apos;ll handle it quickly.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-navy-900">Call <a href="tel:8169861120" className="text-brand-green font-bold">(816) 986-1120</a> or email <a href="mailto:service@bulkinsurancegroup.com" className="text-brand-green font-medium">service@bulkinsurancegroup.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
