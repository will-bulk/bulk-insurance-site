import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Fleet Insurance for Bulk Haulers',
  description: 'Fleet insurance programs for bulk trucking operations. Volume discounts, simplified management, and expert coverage for growing fleets. Bulk Insurance Group.',
  keywords: ['fleet insurance', 'trucking fleet insurance', 'multi truck insurance', 'commercial fleet coverage', 'bulk fleet insurance'],
};

export default function FleetInsurancePage() {
  return (
    <ProductPageLayout
      title="Fleet Insurance for Bulk Haulers"
      subtitle="Multi-Truck Fleet Solutions"
      description="Growing your fleet shouldn't mean growing your headaches. Bulk Insurance Group provides comprehensive fleet insurance programs with volume discounts, simplified management, and the specialized expertise that bulk hauling operations demand."
      heroImage="/images/truck-fleet-lot.jpg"
      midImage="/images/truck-highway.jpg"
      features={[
        { title: "Volume Discounts", description: "The more trucks you insure with us, the more you save. Our fleet programs offer significant volume-based discounts across all coverages." },
        { title: "Simplified Fleet Management", description: "One agency, one renewal, one point of contact. We make managing insurance for multiple trucks simple and efficient." },
        { title: "Growth-Ready Programs", description: "Adding trucks? We make it easy to add vehicles to your fleet policy quickly — often same-day — so you're never waiting to haul." },
        { title: "Driver Management Tools", description: "We help you understand how driver records affect your premiums and advise on hiring decisions that impact your insurance costs." },
        { title: "Mixed Fleet Coverage", description: "Running hopper bottoms, end dumps, and pneumatics? Our fleet programs cover multiple trailer types under one unified policy." },
        { title: "Loss Prevention Guidance", description: "We don't just insure your fleet — we help you reduce claims with proactive loss prevention strategies tailored to bulk operations." },
      ]}
      coverages={[
        'Auto Liability',
        'Physical Damage (All Units)',
        'Motor Truck Cargo',
        'General Liability',
        'Non-Trucking Liability',
        'Workers Compensation',
        'Hired & Non-Owned Auto',
        'Umbrella/Excess Liability',
        'Rental Reimbursement',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'Cargo & Freight', href: '/products/cargo-insurance' },
        { label: 'Workers Comp', href: '/products/workers-compensation' },
        { label: 'General Liability', href: '/products/general-liability' },
        { label: 'Commercial Auto', href: '/products/commercial-auto' },
      ]}
    />
  );
}
