import logo1 from "../../../assets/BrandLogo/logo1.png";
import logo2 from "../../../assets/BrandLogo/logo2.png";
import logo3 from "../../../assets/BrandLogo/logo3.png";
import logo4 from "../../../assets/BrandLogo/logo4.png";
import logo5 from "../../../assets/BrandLogo/logo5.png";
import logo6 from "../../../assets/BrandLogo/logo6.png";
import logo7 from "../../../assets/BrandLogo/logo7.png";
import logo8 from "../../../assets/BrandLogo/logo8.png";
import logo9 from "../../../assets/BrandLogo/logo9.png";
import logo10 from "../../../assets/BrandLogo/logo10.png";
import Marquee from "react-fast-marquee";

const BrandLogo = () => {
  return (
    <div className="mt-12 py-12">
      <Marquee direction="right" pauseOnHover={true}>
        <div className="flex items-center justify-center gap-24">
          <div>
            <img className="w-[45px]" src={logo1} alt="" />
          </div>
          <div>
            <img className="w-[45px]" src={logo2} alt="" />
          </div>
          <div>
            <img className="w-[45px]" src={logo3} alt="" />
          </div>
          <div>
            <img className="w-[45px]" src={logo4} alt="" />
          </div>
          <div>
            <img className="w-[45px]" src={logo5} alt="" />
          </div>
          <div>
            <img className="w-[45px]" src={logo6} alt="" />
          </div>
          <div>
            <img className="w-[60px]" src={logo7} alt="" />
          </div>
          <div>
            <img className="w-[60px]" src={logo8} alt="" />
          </div>
          <div>
            <img className="w-[80px]" src={logo9} alt="" />
          </div>
          <div>
            <img className="w-[80px]" src={logo10} alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default BrandLogo;
