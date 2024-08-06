import Container from "../../Components/Shared/Container";
import Logo2 from "../../Components/Shared/Logo2";

const ToggleBtnCarType = ({ handleCarTypeSelection, selectedCarType }) => {
  return (
    <>
      <section>
        <div id="popular" className="text-white">
          .
        </div>
        <Container>
          <div className="flex flex-col items-center justify-center mt-2 lg:mt-16">
            <div>
              <Logo2 />
            </div>
            <div className="flex">
              <button
                onClick={() => handleCarTypeSelection("brandNew")}
                className={
                  selectedCarType === "brandNew"
                    ? "border-2 rounded-l-full border-l-0 w-[120px] bg-gradient-to-tl from-blue-400 via-slate-700 to-black text-white px-2 font-semibold"
                    : "border-2 rounded-l-full border-white px-2 w-[120px] bg-slate-100 text-black hover:bg-white hover:text-slate-500 font-semibold"
                }
              >
                Brand New
              </button>
              <button
                onClick={() => handleCarTypeSelection("used")}
                className={
                  selectedCarType === "used"
                    ? "border-2 rounded-r-full border-l-0 w-[120px] bg-gradient-to-tl from-blue-400 via-slate-700 to-black text-white px-2 font-semibold"
                    : "border-2 rounded-r-full border-l-0 bg-slate-200 text-black border-white px-2 w-[120px] hover:bg-white hover:text-slate-500 font-semibold"
                }
              >
                Used
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ToggleBtnCarType;
