import { Outlet } from "react-router-dom";
import Headerses from "../components/Headerses";
import Footerses from "../components/Footerses";
import TopBanner from "../components/TopBanner";

const Layout = () => {
  return (
    <>
    <TopBanner />
      <Headerses />
      <Outlet />
      <Footerses />
    </>
  );
};

export default Layout;