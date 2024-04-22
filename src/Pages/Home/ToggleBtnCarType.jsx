import Container from "../../Components/Shared/Container";
import Logo from "../../Components/Shared/Logo";

const ToggleBtnCarType = ({ handleCarTypeSelection, selectedCarType }) => {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center mt-20 lg:mt-28">
          <div>
            <Logo />
          </div>
          <div className="flex">
            <button
              onClick={() => handleCarTypeSelection("brandNew")}
              className={
                selectedCarType === "brandNew"
                  ? "border-2 rounded-l-full border-l-0 border-purple-400 px-2 w-[120px] bg-purple-500 text-white font-semibold"
                  : "border-2 rounded-l-full border-purple-400 px-2 w-[120px] hover:bg-purple-500 hover:text-white font-semibold"
              }
            >
              Brand New
            </button>
            <button
              onClick={() => handleCarTypeSelection("used")}
              className={
                selectedCarType === "used"
                  ? "border-2 rounded-r-full border-l-0 border-purple-400 px-2 w-[120px] bg-purple-500 text-white font-semibold"
                  : "border-2 rounded-r-full border-l-0 border-purple-400 px-2 w-[120px] hover:bg-purple-500 hover:text-white font-semibold"
              }
            >
              Used
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ToggleBtnCarType;
