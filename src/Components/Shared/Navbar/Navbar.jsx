import Container from "../Container";
import Logo from "../Logo";
import BottomNavigation from "./BottomNavigation";
import MenuDropdown from "./MenuDropdown";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Logo />
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
