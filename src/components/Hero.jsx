import siteContent from "../data/siteContent";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[75svh] items-center overflow-hidden bg-navy lg:min-h-[85vh]"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--color-amber) 0%, transparent 50%), radial-gradient(circle at 80% 20%, #334155 0%, transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-14 sm:py-16 md:px-6 md:py-24 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="min-w-0">
          <p className="hero-fade-in mb-3 text-sm font-medium tracking-wide text-amber sm:mb-4 md:text-base">
            {siteContent.tagline}
          </p>
          <h1 id="hero-heading" className="hero-fade-in-delay mb-4 max-w-3xl text-2xl font-bold leading-snug text-white sm:mb-6 sm:text-3xl sm:leading-tight md:text-4xl lg:text-5xl">
            {siteContent.heroTitle}
          </h1>
          <p className="hero-fade-in-delay mb-3 max-w-2xl text-lg font-medium leading-relaxed text-white/90 sm:mb-4 sm:text-xl md:text-2xl">
            {siteContent.heroHeadline}
          </p>
          <p className="hero-fade-in-delay-2 mb-8 max-w-xl text-sm leading-relaxed text-white/70 sm:mb-10 sm:text-base md:text-lg">
            {siteContent.heroSubtext}
          </p>
          <div className="hero-fade-in-delay-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href={`tel:${siteContent.phoneLink}`} className="cta-primary">
              התקשר עכשיו
            </a>
            <a href="#contact" className="cta-secondary">
              צור קשר
            </a>
          </div>
        </div>

        <div
          className="hero-fade-in-delay-2 hidden justify-center lg:flex lg:justify-start"
          aria-hidden="true"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-amber/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
              <Logo className="h-40 w-40 text-white md:h-52 md:w-52" showGlow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
