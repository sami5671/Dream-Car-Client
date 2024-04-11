const BannerCarousalContainer = ({ image, title, text }) => {
  return (
    <div className="relative bg-cover h-40 lg:h-[400px] flex">
      <img
        className="absolute w-full h-full object-cover object-center"
        src={image}
        alt="Banner"
      />
      <div className="absolute  bg-slate-900 bg-opacity-70 rounded-md flex flex-col justify-center text-left px-4">
        <div className="w-[200px] font-serif">
          <h2 className="text-[10px] lg:text-2xl mt-2 font-bold mb-4 lg:mb-10 text-white">
            {title}
          </h2>
          <p className="text-[12px] px-2 md:text-xl text-white">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousalContainer;
