import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-brand-green transition-colors">{title}</h3>
      <p className="text-navy-600 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center gap-2 text-brand-green font-semibold text-sm">
        Learn More
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </div>
    </Link>
  );
}
