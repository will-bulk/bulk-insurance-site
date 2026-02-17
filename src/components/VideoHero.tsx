'use client';

interface VideoHeroProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  minHeight?: string;
  children?: React.ReactNode;
}

export default function VideoHero({ badge, title, subtitle, minHeight = '500px', children }: VideoHeroProps) {
  return (
    <section className="relative text-white overflow-hidden flex items-center" style={{ minHeight }}>
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/freight-truck.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/80 to-primary-950/60" />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 w-full">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-block bg-brand-green/20 text-brand-green px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-300 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
