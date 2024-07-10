import { Link } from "react-router-dom";
import logoImg from "../../assets/Images/logo.png";
const Logo2 = () => {
  return (
    <div>
      <Link to="/">
        <img className="" src={logoImg} alt="logo" width="120" height="60" />
      </Link>
    </div>
  );
};

export default Logo2;
