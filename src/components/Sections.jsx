import { Link } from "react-router-dom";
import siteContent from "../data/siteContent";
import ScrollReveal from "./ScrollReveal";
import ServiceIcon from "./ServiceIcon";

function SectionHeading({ id, title, subtitle }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
      <h2
        id={id}
        className="mb-3 text-2xl font-bold text-navy sm:text-3xl md:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl px-2 text-sm text-muted sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section-padding scroll-mt-20 bg-white" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading
            id="services-heading"
            title="השירותים שלי"
            subtitle="מגוון שירותי חשמל לבית ולעסק — מהתקנה ועד תיקון דחוף"
          />
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {siteContent.services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 60}>
              <article className="group h-full rounded-2xl border border-slate-200 bg-offwhite p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-amber/50 hover:shadow-lg sm:p-6">
                <div className="mb-4 inline-flex rounded-xl bg-amber/15 p-3 text-amber-dark transition-colors group-hover:bg-amber group-hover:text-navy">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-navy">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section-padding scroll-mt-20 bg-offwhite" aria-label="אודות">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-[minmax(240px,320px)_1fr] lg:items-stretch">
            <div className="flex items-center gap-4 bg-gradient-to-l from-amber/15 via-amber/5 to-transparent px-5 py-5 sm:gap-6 sm:px-8 sm:py-7 lg:flex-col lg:justify-center lg:gap-5 lg:bg-gradient-to-b lg:from-amber/15 lg:via-amber/5 lg:to-transparent lg:px-10 lg:py-12">
              <img
                src={siteContent.aboutImage}
                alt={siteContent.businessName}
                width={176}
                height={176}
                className="h-20 w-20 shrink-0 rounded-full object-cover object-[center_22%] ring-4 ring-white shadow-md sm:h-28 sm:w-28 lg:h-44 lg:w-44"
              />
              <div className="min-w-0 text-right lg:text-center">
                <p className="text-xl font-bold text-navy sm:text-2xl lg:text-3xl">
                  דויד שלום פרץ
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-5 pb-5 pt-4 sm:px-8 sm:pb-8 sm:pt-5 lg:px-10 lg:py-12 xl:px-12">
              <p className="mb-5 text-sm leading-relaxed text-charcoal sm:mb-6 sm:text-base lg:mb-8 lg:max-w-3xl lg:text-lg lg:leading-8">
                {siteContent.aboutText}
              </p>
              <div className="grid grid-cols-2 gap-3 border-t border-slate-200 pt-5 sm:gap-4 lg:max-w-2xl lg:gap-5 lg:pt-7">
                <div className="rounded-xl bg-offwhite px-3 py-3 lg:px-5 lg:py-4">
                  <p className="text-2xl font-bold text-amber sm:text-3xl lg:text-4xl">
                    {siteContent.yearsExperience}+
                  </p>
                  <p className="text-xs text-muted sm:text-sm lg:text-base">שנות ניסיון</p>
                </div>
                <div className="rounded-xl bg-offwhite px-3 py-3 lg:px-5 lg:py-4">
                  <p className="text-sm font-semibold text-navy sm:text-base lg:text-lg">
                    אזור שירות
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted sm:text-sm lg:text-base">
                    {siteContent.serviceArea}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why-us" className="section-padding scroll-mt-20 bg-white" aria-labelledby="why-us-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading id="why-us-heading" title="למה לבחור בי?" />
        </ScrollReveal>
        <ScrollReveal>
          <ul className="mx-auto max-w-3xl space-y-5">
            {siteContent.whyUs.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-lg border-r-4 border-amber bg-offwhite px-4 py-4 sm:gap-4 sm:px-5"
              >
                <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber text-sm font-bold text-navy">
                  ✓
                </span>
                <span className="text-sm leading-relaxed text-charcoal sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="section-padding scroll-mt-20 bg-offwhite" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading
            id="gallery-heading"
            title="עבודות אחרונות"
            subtitle="דוגמאות מעבודות שבוצעו — ניתן להחליף בתמונות אמיתיות"
          />
        </ScrollReveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.gallery.map((item) => (
            <ScrollReveal key={item.title}>
              <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-charcoal to-navy"
                    role="img"
                    aria-label={`תמונה לדוגמה: ${item.title}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="h-12 w-12 text-white/40"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                      />
                    </svg>
                  </div>
                )}
                <figcaption className="px-4 py-3 text-sm font-medium text-navy">
                  {item.title}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding scroll-mt-20 bg-white" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading id="testimonials-heading" title="מה הלקוחות אומרים" />
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.testimonials.map((item) => (
            <ScrollReveal key={item.name}>
              <blockquote className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-offwhite p-5 pt-8 shadow-sm sm:p-6 sm:pt-9">
                <span aria-hidden="true" className="absolute right-5 top-2 text-4xl leading-none text-amber/50">
                  “
                </span>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-charcoal sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="text-sm font-semibold text-navy">
                  — {item.name}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-padding scroll-mt-20 bg-navy" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="mb-8 text-center md:mb-12">
            <h2 id="contact-heading" className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              צרו קשר
            </h2>
            <p className="mx-auto max-w-xl px-2 text-sm text-white/70 sm:text-base">
              {siteContent.contactIntro}
            </p>
            <p className="mx-auto mt-3 max-w-xl px-2 text-sm font-medium text-amber sm:text-base">
              {siteContent.contactAvailabilityNote}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto grid max-w-xl gap-4 sm:gap-5">
            <a
              href={`tel:${siteContent.phoneLink}`}
              className="flex min-h-[4.5rem] items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 text-white transition-all active:bg-white/20 sm:p-5 sm:hover:-translate-y-0.5 sm:hover:bg-white/15"
            >
              <span className="rounded-lg bg-amber p-3 text-navy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <div>
                <p className="text-sm text-white/60">טלפון</p>
                <p className="font-semibold">{siteContent.phone}</p>
              </div>
            </a>

            <a
              href={siteContent.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="שליחת הודעה בוואטסאפ, נפתח בחלון חדש"
              className="flex min-h-[4.5rem] items-center gap-4 rounded-2xl border border-white/10 bg-whatsapp p-4 text-navy transition-all active:bg-whatsapp-dark sm:p-5 sm:hover:-translate-y-0.5 sm:hover:bg-whatsapp-dark"
            >
              <span className="rounded-lg bg-navy/10 p-3 text-navy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div>
                <p className="text-sm text-navy/70">וואטסאפ</p>
                <p className="font-semibold">שלחו הודעה</p>
              </div>
            </a>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white">
              <p className="text-sm text-white/60">אזור שירות</p>
              <p className="font-semibold">{siteContent.serviceArea}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="safe-bottom bg-charcoal py-8 pb-36 text-white/70 sm:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center md:px-6">
        <p className="font-tanakh text-base font-medium tracking-wide text-amber sm:text-lg">
          {siteContent.footerMotto}
        </p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-between md:text-right">
          <p className="font-semibold text-white">{siteContent.businessName}</p>
          <a
            href={`tel:${siteContent.phoneLink}`}
            className="inline-flex min-h-11 items-center transition-colors hover:text-amber"
          >
            {siteContent.phone}
          </a>
          <Link
            to="/accessibility"
            className="inline-flex min-h-11 items-center text-sm underline underline-offset-4 transition-colors hover:text-amber"
          >
            {siteContent.footer.accessibilityLink}
          </Link>
          <p className="max-w-xs text-xs sm:max-w-none sm:text-sm">
            © {year} {siteContent.businessName}. {siteContent.footer.copyright}.
          </p>
        </div>
      </div>
    </footer>
  );
}
