import { Outlet } from "react-router-dom";
import { useRef } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Layout = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-slate-900">
      <Header scrollToContact={scrollToContact} />
      <main>
        <Outlet context={{ contactRef }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
