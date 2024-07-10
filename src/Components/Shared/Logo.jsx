import { Link } from "react-router-dom";
import logoImg from "../../assets/Images/logo.png";
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <div className="flex items-center">
          <span className="text-xl font-serif font-bold bg-gradient-to-br from-purple-700 to-green-300 text-transparent bg-clip-text">
            Dream Car
          </span>
          <img
            className="hidden lg:block"
            src={logoImg}
            alt="logo"
            width="60"
            height="60"
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
