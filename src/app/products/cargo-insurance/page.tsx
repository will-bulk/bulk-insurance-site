import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Cargo & Freight Insurance',
  description: 'Motor truck cargo insurance for bulk commodity haulers. Protect your loads of grain, feed, fertilizer, aggregate, and more. Bulk Insurance Group.',
  keywords: ['cargo insurance', 'freight insurance', 'motor truck cargo', 'bulk cargo insurance', 'trucking cargo coverage'],
};

export default function CargoInsurancePage() {
  return (
    <ProductPageLayout
      title="Cargo & Freight Insurance"
      subtitle="Protect Your Loads"
      description="Your cargo is your livelihood. Bulk Insurance Group provides motor truck cargo insurance specifically designed for bulk commodity loads — protecting you against loss, damage, and contamination from pickup to delivery."
      heroImage="/images/semi-truck-sunset.jpg"
      midImage="/images/grain-field.jpg"
      features={[
        { title: "Bulk Commodity Expertise", description: "From grain and fertilizer to aggregate and cement, we know the specific cargo risks for every bulk commodity type." },
        { title: "Contamination Protection", description: "Cross-contamination between loads is a real risk in bulk hauling. Our cargo policies address commodity-specific contamination exposures." },
        { title: "Shipper Requirements Met", description: "Major shippers like ADM, CHS, and Cargill have strict cargo insurance requirements. Our policies are built to meet them." },
        { title: "Loading & Unloading Coverage", description: "Cargo damage doesn't just happen in transit. We cover the full cycle from loading at the elevator to unloading at the destination." },
        { title: "Competitive Cargo Rates", description: "With 50+ carrier options, we find the most competitive cargo coverage rates without sacrificing the protection you need." },
        { title: "Quick Claims Resolution", description: "When a cargo claim happens, time is money. Our team advocates for fast, fair settlements so you can keep moving." },
      ]}
      coverages={[
        'Motor Truck Cargo',
        'All-Risk Cargo Coverage',
        'Named Perils',
        'Contamination Coverage',
        'Refrigeration Breakdown',
        'Loading & Unloading',
        'Debris Removal',
        'Earned Freight',
        'Shipper Interest Cargo',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'Hopper Bottom', href: '/products/hopper-bottom-insurance' },
        { label: 'End Dump', href: '/products/end-dump-insurance' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
        { label: 'General Liability', href: '/products/general-liability' },
      ]}
    />
  );
}
