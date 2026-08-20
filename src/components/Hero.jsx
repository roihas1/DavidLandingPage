import siteContent from "../data/siteContent";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70svh] flex-col justify-center overflow-hidden bg-navy sm:min-h-[75svh] lg:min-h-[80vh]"
      aria-labelledby="hero-heading"
    >
      <img
        src={siteContent.heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-[72%_center]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-l from-navy via-navy/85 to-navy/35 sm:from-navy/95 sm:via-navy/70 sm:to-navy/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="min-w-0 max-w-xl lg:max-w-2xl">
          <p className="hero-fade-in mb-3 font-tanakh text-base font-medium leading-relaxed tracking-wide text-amber sm:mb-4 sm:text-lg md:text-xl">
            {siteContent.tagline}
          </p>
          <h1
            id="hero-heading"
            className="hero-fade-in-delay mb-4 text-[1.75rem] font-bold leading-tight text-white sm:mb-5 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
          >
            {siteContent.heroTitle}
            {siteContent.heroHeadline ? (
              <span className="mt-2 block text-xl font-semibold text-white/90 sm:mt-3 sm:text-2xl md:text-3xl">
                {siteContent.heroHeadline}
              </span>
            ) : null}
          </h1>
          <p className="hero-fade-in-delay-2 mb-8 max-w-lg text-sm leading-relaxed text-white/75 sm:mb-10 sm:text-base md:text-lg">
            {siteContent.heroSubtext}
          </p>
          <div className="hero-fade-in-delay-2">
            <a href={`tel:${siteContent.phoneLink}`} className="cta-primary">
              התקשרו עכשיו
            </a>
            <p className="mt-2 text-xs text-white/55 sm:text-sm">
              {siteContent.callShabbatNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
