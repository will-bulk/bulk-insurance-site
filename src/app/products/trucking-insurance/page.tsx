import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Trucking Insurance for Bulk Haulers',
  description: 'Commercial trucking insurance tailored for bulk commodity haulers. Hopper bottoms, end dumps, pneumatics, tankers & more. Get a free quote from Bulk Insurance Group.',
  keywords: ['trucking insurance', 'bulk hauling insurance', 'commercial truck insurance', 'owner operator insurance', 'semi truck insurance'],
};

export default function TruckingInsurancePage() {
  return (
    <ProductPageLayout
      title="Trucking Insurance for Bulk Haulers"
      subtitle="Commercial Trucking"
      description="Comprehensive commercial trucking insurance designed specifically for bulk commodity haulers. We understand the unique risks of hauling grain, feed, fertilizer, aggregate, and more — and we build policies that protect you where it matters most."
      heroImage="/images/bulk-hauling-start.jpg"
      secondaryImage="/images/trucker-story.jpg"
      features={[
        { title: "Bulk Hauling Specialists", description: "We exclusively serve bulk trucking operations. Our agents understand your commodities, routes, and risks better than any general agency." },
        { title: "50+ Carrier Options", description: "Access to more than 50 A-rated insurance carriers means more competitive quotes and better coverage options for your operation." },
        { title: "Owner-Operator Friendly", description: "Whether you run one truck or twenty, we have programs designed for operations of every size with flexible payment options." },
        { title: "Fast Certificates", description: "Need a certificate of insurance for a shipper? We can issue COIs quickly — even on weekends when you need to keep rolling." },
        { title: "Claims Advocacy", description: "When you have a claim, we go to bat for you. Our team works directly with adjusters to ensure fair and timely resolution." },
        { title: "Multi-Policy Discounts", description: "Bundle your auto liability, cargo, general liability, and workers comp for significant savings across all your coverages." },
      ]}
      coverages={[
        'Auto Liability',
        'Physical Damage',
        'Cargo Insurance',
        'General Liability',
        'Non-Trucking Liability',
        'Bobtail Coverage',
        'Trailer Interchange',
        'Motor Truck Cargo',
        'Uninsured/Underinsured Motorist',
        'Medical Payments',
        'Rental Reimbursement',
        'Towing & Recovery',
      ]}
      relatedProducts={[
        { label: 'Cargo & Freight', href: '/products/cargo-insurance' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
        { label: 'Hopper Bottom', href: '/products/hopper-bottom-insurance' },
        { label: 'End Dump', href: '/products/end-dump-insurance' },
        { label: 'General Liability', href: '/products/general-liability' },
        { label: 'Workers Comp', href: '/products/workers-compensation' },
      ]}
    />
  );
}
