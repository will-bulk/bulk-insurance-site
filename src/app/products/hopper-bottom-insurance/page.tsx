import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Hopper Bottom Trailer Insurance',
  description: 'Insurance for hopper bottom trailers hauling grain, feed, fertilizer, and bulk commodities. Specialized coverage from Bulk Insurance Group.',
  keywords: ['hopper bottom insurance', 'hopper trailer insurance', 'grain hauling insurance', 'grain trailer insurance', 'bulk commodity insurance'],
};

export default function HopperBottomInsurancePage() {
  return (
    <ProductPageLayout
      title="Hopper Bottom Trailer Insurance"
      subtitle="Grain, Feed & Fertilizer"
      description="Hopper bottom trailers are the backbone of America's agricultural supply chain. Bulk Insurance Group provides specialized coverage designed for haulers transporting grain, feed, fertilizer, seed, and other bulk ag commodities."
      heroImage="/images/wheat-harvest.jpg"
      midImage="/images/grain-silos.jpg"
      trailerIcon="/images/trailer-hopper.png"
      features={[
        { title: "Ag Commodity Expertise", description: "We understand the seasonal rhythms, shipper requirements, and unique risks of hauling agricultural commodities in hopper bottoms." },
        { title: "Contamination Coverage", description: "Protection against cross-contamination when switching between feed-grade, food-grade, and fertilizer commodities." },
        { title: "Elevator & Mill Requirements", description: "Our policies meet the insurance requirements of major grain elevators, feed mills, and fertilizer distributors." },
        { title: "Seasonal Flexibility", description: "Many hopper bottom haulers are busiest during harvest. We offer programs that account for seasonal usage patterns." },
        { title: "Trailer Physical Damage", description: "Comprehensive coverage for your hopper bottom trailer investment — collision, comprehensive, and specified perils." },
        { title: "Tarping & Load Securement", description: "Coverage considerations for tarp damage and load securement issues specific to hopper bottom operations." },
      ]}
      coverages={[
        'Auto Liability',
        'Physical Damage (Truck & Trailer)',
        'Motor Truck Cargo',
        'Contamination Coverage',
        'General Liability',
        'Non-Trucking Liability',
        'Bobtail Coverage',
        'Trailer Interchange',
        'Environmental Liability',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'Cargo & Freight', href: '/products/cargo-insurance' },
        { label: 'End Dump', href: '/products/end-dump-insurance' },
        { label: 'Pneumatic', href: '/products/pneumatic-insurance' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
      ]}
    />
  );
}
