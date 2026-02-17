import { Metadata } from 'next';
import ProductPageLayout from '@/components/ProductPageLayout';

export const metadata: Metadata = {
  title: 'Surety Bonds for Trucking',
  description: 'BMC-84 and BMC-85 surety bonds for FMCSA compliance. Required for broker and carrier authority. Bulk Insurance Group.',
  keywords: ['surety bonds', 'BMC-84', 'BMC-85', 'FMCSA bonds', 'trucking bonds', 'freight broker bond', 'carrier surety bond'],
};

export default function SuretyBondsPage() {
  return (
    <ProductPageLayout
      title="Surety Bonds"
      subtitle="FMCSA Compliance"
      description="Surety bonds are required by the FMCSA for carriers and brokers to maintain their operating authority. Bulk Insurance Group provides fast, affordable surety bonds — BMC-84 for carriers and BMC-85 for freight brokers — so you stay compliant and keep rolling."
      heroImage="/images/sunset-highway.jpg"
      midImage="/images/grain-silos.jpg"
      features={[
        { title: "BMC-84 Carrier Bonds", description: "Required for motor carriers to maintain operating authority with the FMCSA. We provide fast issuance and competitive rates." },
        { title: "BMC-85 Broker Bonds", description: "Freight brokers need a $75,000 surety bond or trust fund. We offer competitively priced BMC-85 bonds with quick turnaround." },
        { title: "Fast Issuance", description: "Don't let a bond hold up your authority. We can typically issue surety bonds within 1-2 business days." },
        { title: "Competitive Pricing", description: "Bond premiums vary based on credit and experience. We shop multiple surety companies to find you the best rate." },
        { title: "Authority Compliance Help", description: "Not sure what bonds you need? We walk you through the FMCSA requirements and make sure you're fully compliant." },
        { title: "Renewal Management", description: "We track your bond renewals and reach out proactively so your authority never lapses due to an expired bond." },
      ]}
      coverages={[
        'BMC-84 Carrier Bonds',
        'BMC-85 Broker Bonds',
        'ICC Bonds',
        'Freight Broker Trust Funds',
        'Performance Bonds',
        'License & Permit Bonds',
        'Court Bonds',
        'Customs Bonds',
        'Miscellaneous Bonds',
      ]}
      relatedProducts={[
        { label: 'Trucking Insurance', href: '/products/trucking-insurance' },
        { label: 'General Liability', href: '/products/general-liability' },
        { label: 'Cargo & Freight', href: '/products/cargo-insurance' },
        { label: 'Commercial Auto', href: '/products/commercial-auto' },
        { label: 'Workers Comp', href: '/products/workers-compensation' },
      ]}
    />
  );
}
