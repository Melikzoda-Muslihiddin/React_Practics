import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";
import PopularHotelsSection from "../components/sections/PopularHotelsSection";
import FacilitiesSection from "../components/sections/FacilitiesSection";
import HistorySection from "../components/sections/HistorySection";
import TestimonialSection from "../components/sections/TestimonialSection";
import MapSection from "../components/sections/MapSection";

const Home = () => {
  const { contactRef } = useOutletContext();

  return (
    <>
      <HeroSection />
      <PopularHotelsSection />
      <FacilitiesSection />
      <HistorySection />
      <TestimonialSection />
      <MapSection contactRef={contactRef} />
    </>
  );
};

export default Home;
