import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Workers Compensation Insurance for Trucking',
  description: 'Workers compensation insurance for bulk trucking companies. Protect your drivers and employees. Bulk Insurance Group — built for bulk haulers.',
  keywords: ['workers compensation', 'trucking workers comp', 'workers comp insurance', 'employee injury insurance', 'trucking comp coverage'],
};

export default function WorkersCompensationPage() {
  return (
    <ProductPageLayout
      title="Workers Compensation Insurance"
      subtitle="Employee Protection"
      description="Your drivers are the backbone of your operation. Workers compensation insurance protects them — and you — when injuries happen on the job. Bulk Insurance Group provides comp programs specifically designed for the physical demands of bulk trucking."
      heroImage="/images/tri-state-commodities.jpg"
      secondaryImage="/images/conference-2026.jpg"
      features={[
        { title: "Trucking-Specific Programs", description: "We work with carriers that understand the physical demands of bulk trucking — loading, unloading, tarping, and long hours behind the wheel." },
        { title: "Competitive Rates", description: "Workers comp rates vary dramatically between carriers. We shop aggressively to find the best rates for your operation's class codes." },
        { title: "Claims Management", description: "When an injury occurs, we help manage the claim from start to finish — ensuring your driver gets care and your costs stay controlled." },
        { title: "Return-to-Work Programs", description: "Getting injured drivers back to work safely is good for everyone. We help you build return-to-work programs that reduce claim costs." },
        { title: "Multi-State Coverage", description: "Trucking operations often cross state lines. We ensure your workers comp coverage meets the requirements of every state you operate in." },
        { title: "Pay-As-You-Go Options", description: "Cash flow-friendly payment options based on actual payroll, so you're not overpaying based on estimates." },
      ]}
      coverages={[
        'Medical Expenses',
        'Lost Wage Replacement',
        'Disability Benefits',
        'Rehabilitation Services',
        'Death Benefits',
        'Employer Liability',
        'Multi-State Coverage',
        'Voluntary Compensation',
        'Occupational Disease',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'General Liability', href: '/products/general-liability' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
        { label: 'Commercial Auto', href: '/products/commercial-auto' },
        { label: 'Surety Bonds', href: '/products/surety-bonds' },
      ]}
    />
  );
}
