import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Pneumatic Trailer Insurance',
  description: 'Insurance for pneumatic trailers hauling dry bulk, cement, powder, and specialty commodities. Bulk Insurance Group — the bulk trucking insurance experts.',
  keywords: ['pneumatic trailer insurance', 'dry bulk insurance', 'cement hauling insurance', 'powder transport insurance', 'pneumatic trucking insurance'],
};

export default function PneumaticInsurancePage() {
  return (
    <ProductPageLayout
      title="Pneumatic Trailer Insurance"
      subtitle="Dry Bulk, Cement & Powder"
      description="Pneumatic trailers require specialized expertise — from pressurized unloading systems to product contamination risks. Bulk Insurance Group provides coverage built specifically for dry bulk haulers transporting cement, flour, sugar, and specialty powders."
      heroImage="/images/underground-city.jpg"
      secondaryImage="/images/timpte-manufacturing.jpg"
      trailerIcon="/images/trailer-pneumatic.png"
      features={[
        { title: "Pressurized System Expertise", description: "We understand the unique risks of pneumatic blower systems, including pressure-related incidents and equipment failures." },
        { title: "Product Contamination", description: "Food-grade and industrial commodities can't mix. Our policies address cross-contamination risks specific to pneumatic operations." },
        { title: "Specialized Equipment Coverage", description: "Pneumatic trailers and their compressor systems represent significant investments. We provide comprehensive equipment protection." },
        { title: "Industry-Specific Compliance", description: "Meet the strict insurance requirements of cement plants, flour mills, and chemical manufacturers with compliant policies." },
        { title: "Hazmat-Ready Programs", description: "Some pneumatic commodities classify as hazardous materials. We have carrier partners experienced with hazmat endorsements." },
        { title: "Year-Round Coverage", description: "Unlike seasonal ag hauling, many pneumatic operations run year-round. We structure policies for continuous operations." },
      ]}
      coverages={[
        'Auto Liability',
        'Physical Damage (Truck & Trailer)',
        'Motor Truck Cargo',
        'Contamination Coverage',
        'General Liability',
        'Pollution Liability',
        'Non-Trucking Liability',
        'Bobtail Coverage',
        'Environmental Liability',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'Tanker Insurance', href: '/products/tanker-insurance' },
        { label: 'Cargo & Freight', href: '/products/cargo-insurance' },
        { label: 'Hopper Bottom', href: '/products/hopper-bottom-insurance' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
      ]}
    />
  );
}
