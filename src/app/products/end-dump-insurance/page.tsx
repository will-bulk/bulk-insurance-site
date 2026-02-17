import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'End Dump Trailer Insurance',
  description: 'Specialized insurance for end dump trailers hauling aggregate, sand, gravel, and construction materials. Bulk Insurance Group — built for bulk haulers.',
  keywords: ['end dump insurance', 'end dump trailer insurance', 'aggregate hauling insurance', 'construction trucking insurance', 'dump trailer insurance'],
};

export default function EndDumpInsurancePage() {
  return (
    <ProductPageLayout
      title="End Dump Trailer Insurance"
      subtitle="Aggregate, Sand & Gravel"
      description="End dump operations face unique risks from construction sites to quarries. Bulk Insurance Group provides specialized coverage for haulers transporting aggregate, sand, gravel, asphalt, and other construction materials."
      heroImage="/images/construction-site.jpg"
      midImage="/images/gravel-quarry.jpg"
      trailerIcon="/images/trailer-end-dump.png"
      features={[
        { title: "Construction Site Expertise", description: "We understand the risks of operating on active construction sites, quarries, and unimproved roads that end dump haulers face daily." },
        { title: "Material-Specific Coverage", description: "Whether you haul sand, gravel, aggregate, asphalt, or demolition debris, we build policies tailored to your specific commodities." },
        { title: "Short-Haul Specialists", description: "Many end dump operations run shorter routes with higher frequency. We structure coverage to match your actual operations." },
        { title: "Hydraulic System Coverage", description: "End dump hydraulic failures can be costly. Our policies address the unique mechanical risks of dump trailer operations." },
        { title: "Multi-Trailer Programs", description: "Running multiple end dumps? We offer fleet programs with volume discounts and simplified management for your operation." },
        { title: "Subcontractor Requirements", description: "Meet the insurance requirements of general contractors and construction companies with policies built for the job." },
      ]}
      coverages={[
        'Auto Liability',
        'Physical Damage (Truck & Trailer)',
        'Motor Truck Cargo',
        'General Liability',
        'Non-Trucking Liability',
        'Pollution Liability',
        'Completed Operations',
        'Trailer Interchange',
        'Workers Compensation',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'Hopper Bottom', href: '/products/hopper-bottom-insurance' },
        { label: 'Fleet Insurance', href: '/products/fleet-insurance' },
        { label: 'General Liability', href: '/products/general-liability' },
        { label: 'Workers Comp', href: '/products/workers-compensation' },
      ]}
    />
  );
}
