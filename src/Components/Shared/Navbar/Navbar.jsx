import Container from "../Container";
import Logo from "../Logo";
import BottomNavigation from "./BottomNavigation";
import LargeScreenNavbar from "./LargeScreenNavbar";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-slate-100 shadow-cyan-300 z-10 shadow-2xl">
      <div className="py-4 border-b-[1px]">
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
