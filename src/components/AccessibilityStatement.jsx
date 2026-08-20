import siteContent from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";

export default function AccessibilityStatement({ pageTitle = false }) {
  const { accessibility } = siteContent;
  const Heading = pageTitle ? "h1" : "h2";

  return (
    <section
      id="accessibility"
      className="section-padding min-h-[calc(100svh-12rem)] border-t border-slate-200 bg-white"
      aria-labelledby="accessibility-heading"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <ScrollReveal>
          <Heading
            id="accessibility-heading"
            className="mb-6 border-r-4 border-amber pr-4 text-3xl font-bold text-navy sm:text-4xl"
          >
            {accessibility.title}
          </Heading>

          <div className="space-y-5 text-sm leading-relaxed text-charcoal sm:text-base">
            <p>{accessibility.intro}</p>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-navy">
                {accessibility.standardTitle}
              </h3>
              <p>{accessibility.standardText}</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-navy">
                {accessibility.measuresTitle}
              </h3>
              <ul className="list-disc space-y-2 pr-5">
                {accessibility.measures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-navy">
                {accessibility.limitationsTitle}
              </h3>
              <p>{accessibility.limitationsText}</p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold text-navy">
                {accessibility.contactTitle}
              </h3>
              <p>{accessibility.contactText}</p>
              <ul className="mt-2 space-y-1">
                <li>
                  <strong>טלפון:</strong>{" "}
                  <a href={`tel:${siteContent.phoneLink}`} className="underline">
                    {siteContent.phone}
                  </a>
                </li>
                <li>
                  <strong>וואטסאפ:</strong>{" "}
                  <a
                    href={siteContent.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    aria-label="שליחת הודעה בוואטסאפ, נפתח בחלון חדש"
                  >
                    שליחת הודעה
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted">
              {accessibility.lastUpdatedLabel}: {accessibility.lastUpdated}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
