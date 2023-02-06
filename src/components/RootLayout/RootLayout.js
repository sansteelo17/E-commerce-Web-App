import Navbar from "../UI/Navbar/Navbar";
import Footer from "../UI/Footer/Footer";
import CategoryNav from "../UI/CategoryNav/CategoryNav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex-col justify-between">
      <Navbar />
      <CategoryNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
