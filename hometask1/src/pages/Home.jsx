import { useOutletContext } from "react-router-dom";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";
import HelpSection from "../components/home/BenefitsSection";
import CasesSlider from "../components/home/CasesSlider";
import CareSection from "../components/home/StatsSection";
import ContactCta from "../components/home/ContactCta";
import TestimonialsSection from "../components/home/TestimonialsSection";

const Home = () => {
  const { contactRef, onScrollToContact } = useOutletContext();

  return (
    <>
      <Hero onScrollToContact={onScrollToContact} />
      <Partners />
      <HelpSection />
      <CasesSlider />
      <CareSection />
      <TestimonialsSection />
      <ContactCta contactRef={contactRef} />
    </>
  );
};

export default Home;
