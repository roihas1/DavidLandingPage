import FloatingActions from "../components/FloatingActions";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SkipLink from "../components/SkipLink";
import {
  About,
  Contact,
  Footer,
  Gallery,
  Services,
  Testimonials,
  WhyUs,
} from "../components/Sections";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="pb-4" tabIndex={-1}>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
