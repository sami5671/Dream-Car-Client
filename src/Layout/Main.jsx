import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
const Main = () => {
  return (
    <div className="font-play bg-gradient-to-tl from-black via-slate-700 to-black text-white">
      <Navbar />
      <div className="pt-20 min-h-[calc(100vh-68px)] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
