import { Link, useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  // =================================================================
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  //   console.log(category);

  // =================================================================
  return (
    <Container>
      <div>
        <h1 className="text-2xl lg:text-4xl mt-8 lg:mt-8 font-bold mb-2">
          Popular categories
        </h1>
        <Link to="/carCollection">
          <p className="text-slate-900 hover:text-purple-600 cursor-pointer hover:underline w-fit">
            See all
          </p>
        </Link>
      </div>
      <div className="pt-4 pb-2 flex items-center gap-3 justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item._id}
            label={item.label}
            selected={category === item.label}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
