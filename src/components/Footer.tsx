import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* CTA Banner */}
      <div className="bg-brand-green">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Ready to Save on Your Trucking Insurance?</h3>
            <p className="text-white/90 mt-1">Get a free quote in minutes. Our bulk hauling specialists are standing by.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/get-quote" className="bg-white text-brand-green-dark font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get a Free Quote
            </Link>
            <a href="tel:8169861120" className="btn-outline">
              Call (816) 986-1120
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Bulk Insurance Group"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The industry leader in bulk trucking insurance. Over 20 years of experience serving 10,000+ bulk haulers nationwide.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Kansas City, MO
              </p>
              <a href="tel:8169861120" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (816) 986-1120
              </a>
              <a href="mailto:info@bulkinsurancegroup.com" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@bulkinsurancegroup.com
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products/trucking-insurance" className="hover:text-brand-green transition-colors">Trucking Insurance</Link></li>
              <li><Link href="/products/cargo-insurance" className="hover:text-brand-green transition-colors">Cargo & Freight</Link></li>
              <li><Link href="/products/fleet-insurance" className="hover:text-brand-green transition-colors">Fleet Insurance</Link></li>
              <li><Link href="/products/hopper-bottom-insurance" className="hover:text-brand-green transition-colors">Hopper Bottom</Link></li>
              <li><Link href="/products/end-dump-insurance" className="hover:text-brand-green transition-colors">End Dump</Link></li>
              <li><Link href="/products/pneumatic-insurance" className="hover:text-brand-green transition-colors">Pneumatic</Link></li>
              <li><Link href="/products/tanker-insurance" className="hover:text-brand-green transition-colors">Tanker</Link></li>
              <li><Link href="/products/walking-floor-insurance" className="hover:text-brand-green transition-colors">Walking Floor</Link></li>
            </ul>
          </div>

          {/* More Products */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Business Coverage</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products/commercial-auto" className="hover:text-brand-green transition-colors">Commercial Auto</Link></li>
              <li><Link href="/products/general-liability" className="hover:text-brand-green transition-colors">General Liability</Link></li>
              <li><Link href="/products/workers-compensation" className="hover:text-brand-green transition-colors">Workers Compensation</Link></li>
              <li><Link href="/products/surety-bonds" className="hover:text-brand-green transition-colors">Surety Bonds</Link></li>
            </ul>
            <h4 className="text-white font-semibold text-lg mb-4 mt-8">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/resources" className="hover:text-brand-green transition-colors">Blog</Link></li>
              <li><Link href="/resources#faq" className="hover:text-brand-green transition-colors">FAQ</Link></li>
              <li><Link href="/get-quote" className="hover:text-brand-green transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="hover:text-brand-green transition-colors">Our Team</Link></li>
              <li><Link href="/about#testimonials" className="hover:text-brand-green transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
              <li><Link href="/contact#claims" className="hover:text-brand-green transition-colors">Submit a Claim</Link></li>
              <li><Link href="/contact#certificates" className="hover:text-brand-green transition-colors">Request Certificate</Link></li>
            </ul>

            {/* BulkLoads family */}
            <h4 className="text-white font-semibold text-lg mb-4 mt-8">BulkLoads Family</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://bulkloads.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">BulkLoads.com</a></li>
              <li><a href="https://bulktms.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">BulkTMS.com</a></li>
              <li><a href="https://smartfreightfunding.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">SmartFreightFunding.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bulk Insurance Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
