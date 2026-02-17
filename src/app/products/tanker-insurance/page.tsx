import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Tanker Trailer Insurance',
  description: 'Insurance for tanker trailers hauling liquid bulk commodities including fuel, chemicals, and food-grade liquids. Bulk Insurance Group — built for bulk haulers.',
  keywords: ['tanker insurance', 'tanker trailer insurance', 'liquid bulk insurance', 'fuel hauling insurance', 'chemical transport insurance'],
};

export default function TankerInsurancePage() {
  return (
    <ProductPageLayout
      title="Tanker Trailer Insurance"
      subtitle="Liquid, Fuel & Chemicals"
      description="Tanker operations carry some of the highest-risk commodities on the road. Bulk Insurance Group provides specialized tanker insurance programs that address the unique liability, environmental, and hazmat exposures of liquid bulk hauling."
      heroImage="/images/tanker-truck.jpg"
      midImage="/images/semi-on-road.jpg"
      trailerIcon="/images/trailer-tanker.png"
      features={[
        { title: "Hazmat Expertise", description: "Many tanker commodities require hazmat endorsements. We work with carriers experienced in hazardous materials coverage." },
        { title: "Environmental Liability", description: "Spill and contamination risks are real with liquid bulk. Our policies include environmental coverage to protect your operation." },
        { title: "Food-Grade Programs", description: "Hauling food-grade liquids like milk, oils, or juices? We have programs that meet the strict requirements of food processors." },
        { title: "Fuel Hauling Coverage", description: "Fuel tankers face unique fire and explosion risks. Our policies address the specific exposures of petroleum transport." },
        { title: "Chemical Transport", description: "Industrial chemical transport requires specialized coverage. We build policies that satisfy shipper requirements and regulatory standards." },
        { title: "Tank Wash Compliance", description: "Contamination between loads is a serious risk. Our coverage addresses the unique challenges of maintaining tank cleanliness." },
      ]}
      coverages={[
        'Auto Liability',
        'Physical Damage (Truck & Trailer)',
        'Motor Truck Cargo',
        'Pollution Liability',
        'Environmental Cleanup',
        'General Liability',
        'Hazmat Coverage',
        'Non-Trucking Liability',
        'Bobtail Coverage',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'Pneumatic Insurance', href: '/products/pneumatic-insurance' },
        { label: 'Cargo & Freight', href: '/products/cargo-insurance' },
        { label: 'General Liability', href: '/products/general-liability' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
      ]}
    />
  );
}
