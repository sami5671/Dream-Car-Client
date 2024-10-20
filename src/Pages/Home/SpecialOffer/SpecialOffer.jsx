import Container from "../../../Components/Shared/Container";

const SpecialOffer = () => {
  return (
    <>
      <Container>
        <div className="mt-28 bg-gradient-to-bl from-black via-slate-700 to-black rounded-3xl">
          <div className="flex flex-col-reverse  lg:flex-row items-center justify-between px-5 lg:px-24 py-8">
            <div className="lg:w-1/2">
              <h1 className="text-2xl lg:text-3xl">
                Do You Want To Receive <br /> Special Offers?
              </h1>
              <p className="lg:w-2/3 text-slate-300 mt-12">
                Be the first to receive all the information about our products
                and new cars by email by subscribing to our mailing list.
              </p>
              <button className="mt-6 lg:mt-12 hover:bg-white hover:text-slate-300 rounded-lg px-2 py-1 lg:px-6 lg:py-2 bg-gradient-to-tl from-blue-500 via-slate-700 to-slate-100">
                Subscribe Now
              </button>
            </div>
            <div className="px-12 py-6">
              <img
                className="lg:w-[450px]"
                src="https://res.cloudinary.com/dgz0be5p3/image/upload/v1722979438/zohtwi3ylxkuovawsad4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SpecialOffer;
