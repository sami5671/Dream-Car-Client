import loaderimg from "../../assets/Images/loadderimg.gif";

const Loader1 = () => {
  return (
    <div className="lg:h-[350px] flex flex-col justify-center items-center">
      {/* <ImSpinner2 size={100} color="purple" className="animate-spin" /> */}
      <img src={loaderimg} alt="" />
    </div>
  );
};

export default Loader1;
