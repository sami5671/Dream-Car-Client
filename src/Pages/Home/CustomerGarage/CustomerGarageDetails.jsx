import Container from "./../../../Components/Shared/Container";
import bannerGarageImg from "../../../assets/Images/bannerYourGarage.png";
const CustomerGarageDetails = () => {
  return (
    <Container>
      {/* banner */}
      <div className="flex justify-between">
        <div className="lg:w-[480px]">
          <h1 className="lg:text-5xl font-bold">Your Garage</h1>
          <h3 className="text-3xl font-semibold mt-12">
            Add your car. Track its value.
          </h3>
          <p className="mt-5 text-slate-900">
            Add your car to Your Garage to track its market value and cash in
            when the time is right to sell.
          </p>
          <button className="mt-12 bg-purple-600 px-5 py-3 rounded-full font-bold text-white">
            Get Started
          </button>
          <p className="mt-1 ml-1">
            Already have an account?
            <span className="font-bold underline cursor-pointer hover:decoration-white">
              Sign in
            </span>
          </p>
        </div>

        <div>
          <img src={bannerGarageImg} alt="" />
        </div>
      </div>
      {/*  */}
    </Container>
  );
};

export default CustomerGarageDetails;
