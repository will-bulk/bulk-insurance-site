import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Commercial Auto Insurance',
  description: 'Commercial auto insurance for bulk trucking businesses. Protect your trucks, pickups, and service vehicles. Bulk Insurance Group.',
  keywords: ['commercial auto insurance', 'business vehicle insurance', 'commercial truck insurance', 'business auto coverage'],
};

export default function CommercialAutoPage() {
  return (
    <ProductPageLayout
      title="Commercial Auto Insurance"
      subtitle="Business Vehicle Protection"
      description="Beyond your semis and trailers, your business relies on pickups, service vehicles, and support equipment. Bulk Insurance Group provides commercial auto coverage for every vehicle in your operation — all under one roof with your trucking insurance."
      heroImage="/images/semi-truck-sunset.jpg"
      midImage="/images/road-sunset.jpg"
      features={[
        { title: "Full Fleet Coverage", description: "From semi trucks to pickup trucks, we cover every commercial vehicle your business operates under one comprehensive policy." },
        { title: "Bundled Savings", description: "Combine your commercial auto with your trucking insurance, cargo, and liability for significant multi-policy discounts." },
        { title: "Flexible Payment Options", description: "Cash flow matters in trucking. We offer monthly, quarterly, and annual payment plans to fit your operation's financial needs." },
        { title: "Quick Vehicle Additions", description: "Buying a new truck or service vehicle? We can add it to your policy quickly — often the same day." },
        { title: "Hired & Non-Owned Coverage", description: "Using rented vehicles or having employees drive their personal vehicles for business? We have you covered." },
        { title: "Comprehensive & Collision", description: "Full physical damage protection for your vehicles including comprehensive, collision, and specified causes of loss." },
      ]}
      coverages={[
        'Liability Coverage',
        'Collision Coverage',
        'Comprehensive Coverage',
        'Uninsured Motorist',
        'Medical Payments',
        'Hired Auto Coverage',
        'Non-Owned Auto',
        'Rental Reimbursement',
        'Towing & Labor',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
        { label: 'General Liability', href: '/products/general-liability' },
        { label: 'Workers Comp', href: '/products/workers-compensation' },
        { label: 'Cargo & Freight', href: '/products/cargo-insurance' },
      ]}
    />
  );
}
