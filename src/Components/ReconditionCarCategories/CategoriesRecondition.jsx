import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CategoryReconditionBox from "./CategoryReconditionBox";
import { categoriesRecondition } from "./CategoriesReconditionData";

const CategoriesRecondition = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("reconditionCategory");

  // console.log(category);
  return (
    <>
      <Container>
        <div>
          {/* header */}
          <div className="flex items-center justify-between mt-12 lg:mt-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">Recondition Car</h1>
            </div>
            <div className="hidden lg:block">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered lg:w-96"
              />
            </div>
          </div>
          {/* header */}
          <p className="text-slate-900 hover:text-purple-600 cursor-pointer hover:underline w-fit">
            See all
          </p>
        </div>

        {/* recondition categories */}

        <div className="pt-4 pb-2 flex items-center gap-12 overflow-x-auto">
          {categoriesRecondition.map((item) => (
            <CategoryReconditionBox
              key={item._id}
              label={item.label}
              img={item.img}
              selected={category === item.label}
            ></CategoryReconditionBox>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CategoriesRecondition;
