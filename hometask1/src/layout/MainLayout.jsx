import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleScrollToContact = () => {
    if (location.pathname !== "/") return;

    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] text-black">
      <Header onScrollToContact={handleScrollToContact} />
      <main>
        <Outlet
          context={{ contactRef, onScrollToContact: handleScrollToContact }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
