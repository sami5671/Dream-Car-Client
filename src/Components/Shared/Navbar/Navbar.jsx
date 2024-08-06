import Container from "../Container";
import Logo from "../Logo";
import BottomNavigation from "./BottomNavigation";
import LargeScreenNavbar from "./LargeScreenNavbar";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <div className="fixed bg-gradient-to-tl from-black via-slate-700 to-black w-full z-10">
      <div className="py-4">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Logo />
            {/* large screen navbar */}
            <LargeScreenNavbar />
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
        <section className="block lg:hidden">
          <BottomNavigation />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
