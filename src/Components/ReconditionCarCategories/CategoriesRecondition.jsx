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
          <div className="flex items-center justify-between mt-12 lg:mt-8">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold mb-2">
                Recondition Car
              </h1>
            </div>
          </div>
          {/* header */}
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
