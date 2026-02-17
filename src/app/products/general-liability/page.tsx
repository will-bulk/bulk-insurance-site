import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'General Liability Insurance for Trucking',
  description: 'General liability insurance for bulk trucking operations. Protect your business against third-party claims. Bulk Insurance Group.',
  keywords: ['general liability insurance', 'trucking liability', 'business liability insurance', 'commercial general liability', 'CGL insurance'],
};

export default function GeneralLiabilityPage() {
  return (
    <ProductPageLayout
      title="General Liability Insurance"
      subtitle="Business Protection"
      description="General liability insurance protects your trucking business against third-party claims for bodily injury, property damage, and personal injury. It's essential coverage that every bulk hauling operation needs — and we make sure you have the right limits."
      heroImage="/images/business-handshake.jpg"
      midImage="/images/business-charts.jpg"
      features={[
        { title: "Industry-Specific Coverage", description: "Not all GL policies are created equal. Ours are written with the specific exposures of bulk trucking operations in mind." },
        { title: "Shipper & Broker Requirements", description: "Many shippers and brokers require specific GL limits. We ensure your policy meets all contractual insurance requirements." },
        { title: "Completed Operations", description: "Coverage extends beyond the delivery — protecting you if a claim arises after the load has been dropped and signed for." },
        { title: "Premises Liability", description: "If you have a terminal, yard, or office, we cover injuries or property damage that occur on your business premises." },
        { title: "Bundle & Save", description: "Combine your general liability with auto liability, cargo, and workers comp for significant multi-policy discounts." },
        { title: "Umbrella Coordination", description: "Need higher limits? We coordinate your GL with umbrella/excess policies for comprehensive liability protection." },
      ]}
      coverages={[
        'Bodily Injury Liability',
        'Property Damage Liability',
        'Personal & Advertising Injury',
        'Completed Operations',
        'Premises Liability',
        'Products Liability',
        'Medical Payments',
        'Fire Legal Liability',
        'Contractual Liability',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'Workers Comp', href: '/products/workers-compensation' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
        { label: 'Surety Bonds', href: '/products/surety-bonds' },
        { label: 'Cargo & Freight', href: '/products/cargo-insurance' },
      ]}
    />
  );
}
