import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoryReconditionBox = ({ label, img, selected }) => {
  // =================================================================
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    // console.log("clicked", label);
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      const updateQuery = { ...currentQuery, reconditionCategory: label };
      const url = qs.stringifyUrl({
        url: "/",
        query: updateQuery,
      });
      navigate(url);
    }
  };
  // =================================================================
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-2 rounded-lg hover:bg-slate-900 hover:text-white transition cursor-pointer ${
        selected ? "border-slate-700 text-neutral-800" : ""
      }`}
    >
      <div className="text-center">
        <img
          src={img}
          className="w-[40px] h-[25px] lg:w-[40px] lg:h-[30px]"
          alt=""
        />
        <p className="font-bold text-[12px]"> {label}</p>
      </div>
    </div>
  );
};

export default CategoryReconditionBox;
