'use client';

import Link from 'next/link';
import { useState } from 'react';

const productLinks = [
  { label: 'Trucking Insurance', href: '/products/trucking-insurance', desc: 'Comprehensive coverage for bulk haulers' },
  { label: 'Cargo & Freight Insurance', href: '/products/cargo-insurance', desc: 'Protect your loads in transit' },
  { label: 'Fleet Insurance', href: '/products/fleet-insurance', desc: 'Multi-truck fleet solutions' },
  { label: 'Hopper Bottom Insurance', href: '/products/hopper-bottom-insurance', desc: 'Grain & commodity trailers' },
  { label: 'End Dump Insurance', href: '/products/end-dump-insurance', desc: 'Aggregate & construction hauling' },
  { label: 'Pneumatic Insurance', href: '/products/pneumatic-insurance', desc: 'Dry bulk & powder transport' },
  { label: 'Tanker Insurance', href: '/products/tanker-insurance', desc: 'Liquid bulk hauling coverage' },
  { label: 'Walking Floor Insurance', href: '/products/walking-floor-insurance', desc: 'Specialty trailer coverage' },
  { label: 'Commercial Auto', href: '/products/commercial-auto', desc: 'Business vehicle protection' },
  { label: 'General Liability', href: '/products/general-liability', desc: 'Business liability coverage' },
  { label: 'Workers Compensation', href: '/products/workers-compensation', desc: 'Employee injury protection' },
  { label: 'Surety Bonds', href: '/products/surety-bonds', desc: 'BMC-84 & BMC-85 bonds' },
];

const resourceLinks = [
  { label: 'Blog', href: '/resources' },
  { label: 'FAQ', href: '/resources#faq' },
  { label: 'Claims', href: '/contact#claims' },
  { label: 'Policy Changes', href: '/contact#policy-changes' },
  { label: 'Certificate Requests', href: '/contact#certificates' },
];

const aboutLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/about#team' },
  { label: 'Testimonials', href: '/about#testimonials' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-primary-950 text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-10">
          <div className="flex items-center gap-6">
            <a href="tel:8169861120" className="hover:text-brand-green transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (816) 986-1120
            </a>
            <a href="mailto:info@bulkinsurancegroup.com" className="hover:text-brand-green transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@bulkinsurancegroup.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact#claims" className="hover:text-brand-green transition-colors">Submit a Claim</Link>
            <span className="text-primary-700">|</span>
            <Link href="/contact#certificates" className="hover:text-brand-green transition-colors">Request Certificate</Link>
            <span className="text-primary-700">|</span>
            <Link href="/contact#policy-changes" className="hover:text-brand-green transition-colors">Policy Changes</Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/logo.png"
                alt="Bulk Insurance Group"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-navy-900 hover:text-brand-green font-medium transition-colors">Home</Link>
              
              {/* Products dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown('products')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-4 py-2 text-navy-900 hover:text-brand-green font-medium transition-colors flex items-center gap-1">
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openDropdown === 'products' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white shadow-2xl rounded-xl border border-gray-100 p-6 grid grid-cols-2 gap-2">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex flex-col p-3 rounded-lg hover:bg-primary-50 transition-colors group"
                      >
                        <span className="font-medium text-navy-900 group-hover:text-brand-green transition-colors">{link.label}</span>
                        <span className="text-sm text-navy-500">{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-4 py-2 text-navy-900 hover:text-brand-green font-medium transition-colors flex items-center gap-1">
                  Resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openDropdown === 'resources' && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-xl border border-gray-100 p-2">
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 rounded-lg text-navy-900 hover:bg-primary-50 hover:text-brand-green font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="px-4 py-2 text-navy-900 hover:text-brand-green font-medium transition-colors flex items-center gap-1">
                  About
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openDropdown === 'about' && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-xl border border-gray-100 p-2">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 rounded-lg text-navy-900 hover:bg-primary-50 hover:text-brand-green font-medium transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact" className="px-4 py-2 text-navy-900 hover:text-brand-green font-medium transition-colors">Contact</Link>
            </div>

            {/* CTA button */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:8169861120" className="text-navy-900 font-semibold hover:text-brand-green transition-colors">
                (816) 986-1120
              </a>
              <Link href="/get-quote" className="btn-primary text-sm py-2.5 px-6">
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-navy-900"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              <Link href="/" className="block px-4 py-2 text-navy-900 font-medium rounded-lg hover:bg-primary-50" onClick={() => setMobileOpen(false)}>Home</Link>
              <div className="px-4 py-2 text-navy-500 font-semibold text-sm uppercase tracking-wider">Products</div>
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-8 py-2 text-navy-900 rounded-lg hover:bg-primary-50" onClick={() => setMobileOpen(false)}>{link.label}</Link>
              ))}
              <div className="border-t my-2"></div>
              <Link href="/resources" className="block px-4 py-2 text-navy-900 font-medium rounded-lg hover:bg-primary-50" onClick={() => setMobileOpen(false)}>Resources</Link>
              <Link href="/about" className="block px-4 py-2 text-navy-900 font-medium rounded-lg hover:bg-primary-50" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/contact" className="block px-4 py-2 text-navy-900 font-medium rounded-lg hover:bg-primary-50" onClick={() => setMobileOpen(false)}>Contact</Link>
              <div className="pt-2">
                <Link href="/get-quote" className="btn-primary block text-center" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
