import loaderimg from "../../assets/Images/loadderimg.gif";

const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* <ImSpinner2 size={100} color="purple" className="animate-spin" /> */}
      <img src={loaderimg} alt="" />
    </div>
  );
};

export default Loader;
