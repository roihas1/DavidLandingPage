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
          <p className="hero-fade-in mb-3 text-sm font-medium tracking-wide text-white/70 sm:mb-4 md:text-base">
            {siteContent.tagline}
          </p>
          <h1
            id="hero-heading"
            className="hero-fade-in-delay mb-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {siteContent.heroTitle}
            <span className="mt-1 block text-amber sm:mt-2">
              {siteContent.heroHeadline}
            </span>
          </h1>
          <p className="hero-fade-in-delay-2 mb-7 max-w-xl text-base leading-relaxed text-white/75 sm:mb-9 sm:text-lg md:text-xl">
            {siteContent.heroSubtext}
          </p>
          <div className="hero-fade-in-delay-2">
            <a href={`tel:${siteContent.phoneLink}`} className="cta-primary">
              התקשרו עכשיו
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
