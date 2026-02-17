import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the Bulk Insurance Group team — industry experts in bulk trucking, farm, and agribusiness insurance. Dedicated professionals serving 10,000+ haulers nationwide.',
};

interface TeamMember {
  name: string;
  title: string;
  image: string;
  email: string;
  phone: string;
  linkedin?: string;
}

const leadership: TeamMember[] = [
  {
    name: 'Jared Flinn',
    title: 'Founder & CEO',
    image: '/images/team-jared.png',
    email: 'jared@bulkinsurancegroup.com',
    phone: '(800) 518-9240',
    linkedin: 'https://linkedin.com/in/jaredrflinn/',
  },
  {
    name: 'Larry Hurt',
    title: 'Co-Founder & CEO',
    image: '/images/team-larry.png',
    email: 'larry@bulkinsurancegroup.com',
    phone: '(417) 590-8111',
    linkedin: 'https://linkedin.com/in/larryhurt/',
  },
];

const farmExperts: TeamMember[] = [
  {
    name: 'Levi Keatts',
    title: 'Insurance Producer',
    image: '/images/team-levi.png',
    email: 'levi@bulkinsurancegroup.com',
    phone: '(417) 283-6215',
    linkedin: 'https://linkedin.com/in/levi-keatts-5b9559144',
  },
  {
    name: 'Briar Wilhelm',
    title: 'Insurance Producer',
    image: '/images/team-briar.png',
    email: 'briar@bulkinsurancegroup.com',
    phone: '(417) 631-4575',
    linkedin: 'https://linkedin.com/in/briar-wilhelm-a37895252',
  },
];

const truckingExperts: TeamMember[] = [
  {
    name: 'George "Buddy" Baumann',
    title: 'Insurance Producer',
    image: '/images/team-george.png',
    email: 'george@bulkinsurancegroup.com',
    phone: '(417) 221-3514',
    linkedin: 'https://linkedin.com/in/george-%E2%80%9Cbuddy%E2%80%9D-baumann-7a7573190',
  },
  {
    name: 'Austin Gillund',
    title: 'Insurance Producer',
    image: '/images/team-austin.png',
    email: 'austin.g@bulkinsurancegroup.com',
    phone: '(417) 986-7292',
  },
  {
    name: 'Brett Williams',
    title: 'Sales Manager',
    image: '/images/team-brett.jpg',
    email: 'brett.w@bulkinsurancegroup.com',
    phone: '(800) 518-9240',
  },
  {
    name: 'Jackson Voelmeck',
    title: 'Insurance Producer',
    image: '/images/team-jackson.jpg',
    email: 'jackson@bulkinsurancegroup.com',
    phone: '(417) 283-4785',
    linkedin: 'https://linkedin.com/in/jackson-voelmeck-999478217',
  },
];

const accountManagement: TeamMember[] = [
  {
    name: 'Sarah Fina',
    title: 'Director of Account Management',
    image: '/images/team-sarah.png',
    email: 'sarah@bulkinsurancegroup.com',
    phone: '(417) 815-9598',
    linkedin: 'https://linkedin.com/in/sarah-fina-b0227624b',
  },
  {
    name: 'Cierra Matheney',
    title: 'Commercial Account Tech',
    image: '/images/team-cierra.jpg',
    email: 'cierra.m@bulkinsurancegroup.com',
    phone: '(800) 518-9240',
    linkedin: 'https://linkedin.com/in/cierra-matheney-a642761bb',
  },
  {
    name: 'Emily Compton',
    title: 'Account Manager',
    image: '/images/team-emily.jpg',
    email: 'emily.c@bulkinsurancegroup.com',
    phone: '(800) 518-9240',
  },
  {
    name: 'Joclynn Weir',
    title: 'Account Tech',
    image: '/images/team-joclynn.jpg',
    email: 'joclynn.w@bulkinsurancegroup.com',
    phone: '(800) 518-9240',
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="flex justify-center pt-8 pb-2 bg-gray-50">
        <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-navy-900">{member.name}</h3>
        <p className="text-brand-green font-semibold text-sm mt-1">{member.title}</p>
        <div className="mt-4 space-y-2">
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-2 text-navy-600 hover:text-brand-green transition-colors text-sm"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {member.email}
          </a>
          <a
            href={`tel:${member.phone.replace(/[^+\d]/g, '')}`}
            className="flex items-center gap-2 text-navy-600 hover:text-brand-green transition-colors text-sm"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {member.phone}
          </a>
        </div>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-sm text-navy-500 hover:text-[#0077B5] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

function TeamSection({ title, subtitle, members }: { title: string; subtitle?: string; members: TeamMember[] }) {
  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900">{title}</h2>
        {subtitle && <p className="text-navy-500 mt-2">{subtitle}</p>}
        <div className="w-16 h-1 bg-brand-green rounded mt-4"></div>
      </div>
      <div className={`grid gap-8 ${members.length === 2 ? 'md:grid-cols-2 max-w-2xl' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
        {members.map((member) => (
          <TeamCard key={member.email} member={member} />
        ))}
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/freight-truck.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/85 to-primary-950/70" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-green/20 text-brand-green px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Our Team
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Meet the People Behind<br />
              <span className="text-brand-green">Bulk Insurance Group</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our team of industry experts is dedicated to protecting bulk haulers, farmers, and agribusinesses across the country. Real people, real expertise, real results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <TeamSection
            title="Leadership"
            subtitle="Founded on a passion for the bulk hauling industry"
            members={leadership}
          />
          <TeamSection
            title="Farm & Agribusiness Experts"
            subtitle="Specialized coverage for agricultural operations"
            members={farmExperts}
          />
          <TeamSection
            title="Trucking Experts"
            subtitle="Deep knowledge of commercial trucking insurance"
            members={truckingExperts}
          />
          <TeamSection
            title="Account Management"
            subtitle="Dedicated support from quote to claim"
            members={accountManagement}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-green to-brand-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Our Team?</h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free quote from one of our industry specialists today.
          </p>
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
