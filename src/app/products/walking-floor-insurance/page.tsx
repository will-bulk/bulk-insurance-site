import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Walking Floor Trailer Insurance',
  description: 'Insurance for walking floor trailers hauling biomass, waste, recyclables, and specialty bulk commodities. Bulk Insurance Group — the bulk trucking experts.',
  keywords: ['walking floor insurance', 'walking floor trailer insurance', 'biomass hauling insurance', 'recycling trucking insurance', 'live floor trailer insurance'],
};

export default function WalkingFloorInsurancePage() {
  return (
    <ProductPageLayout
      title="Walking Floor Trailer Insurance"
      subtitle="Biomass, Waste & Recyclables"
      description="Walking floor trailers handle some of the most diverse commodities in bulk hauling — from wood chips and biomass to recyclables and municipal waste. Bulk Insurance Group understands the unique operational risks and provides tailored coverage solutions."
      heroImage="/images/farm-landscape.jpg"
      midImage="/images/open-highway.jpg"
      trailerIcon="/images/trailer-walking-floor.png"
      features={[
        { title: "Diverse Commodity Coverage", description: "Walking floors haul everything from wood chips to recycling. Our policies cover the wide range of commodities you may transport." },
        { title: "Mechanical Breakdown", description: "Walking floor hydraulic systems are complex and expensive to repair. We address the unique mechanical risks of live-floor operations." },
        { title: "Waste Hauling Programs", description: "Municipal and industrial waste hauling requires specific coverages. We have carrier partners experienced with waste transport." },
        { title: "Biomass & Renewable Energy", description: "The growing biomass and renewable energy sector relies on walking floors. We provide coverage for this expanding market." },
        { title: "Transfer Station Coverage", description: "Operating at transfer stations and recycling facilities presents unique risks. Our policies account for these operational exposures." },
        { title: "Multi-Use Flexibility", description: "Many walking floor operators haul different commodity types. We build flexible policies that adapt to your changing loads." },
      ]}
      coverages={[
        'Auto Liability',
        'Physical Damage (Truck & Trailer)',
        'Motor Truck Cargo',
        'General Liability',
        'Pollution Liability',
        'Non-Trucking Liability',
        'Environmental Coverage',
        'Bobtail Coverage',
        'Workers Compensation',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'End Dump Insurance', href: '/products/end-dump-insurance' },
        { label: 'Cargo & Freight', href: '/products/cargo-insurance' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
        { label: 'General Liability', href: '/products/general-liability' },
      ]}
    />
  );
}
