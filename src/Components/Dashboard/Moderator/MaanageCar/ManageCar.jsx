import UseAllCar from "../../../../Hooks/UseAllCar";
import details from "../../../../assets/Images/details.png";
import update from "../../../../assets/Images/update.png";
import deleteImg from "../../../../assets/Images/delete.png";
import { categories } from "../../../Categories/CategoriesData";
import { useState } from "react";
import CarDetailsModal from "./CarDetailsModal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteCar } from "../../../../api/Cars";

const ManageCar = () => {
  // =================================================================
  const [allCar, refetch] = UseAllCar();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [selectCondition, setSelectCondition] = useState("");
  const [isDetailOpen, setDetailOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState([]);
  // console.log(allCar);

  const conditionCar = [
    {
      id: 1,
      type: "Used",
    },
    {
      id: 2,
      type: "Brand New",
    },
  ];

  const handleOpenDetails = (item) => {
    setSelectedCar(item);
    setDetailOpen(true);
  };
  const handleCloseDetails = () => {
    setDetailOpen(false);
    setSelectedCar(null);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSelectCategory = (event) => {
    setSelectCategory(event.target.value);
  };
  const handleSelectCondition = (event) => {
    setSelectCondition(event.target.value);
  };

  const filterItems = allCar.filter((item) => {
    const matchModel = item?.CarModel?.toLowerCase().includes(
      searchQuery.toLowerCase()
    );
    const matchCategory = selectCategory
      ? item?.Category === selectCategory
      : true;
    const matchCondition = selectCondition
      ? item?.CarCondition === selectCondition
      : true;
    return matchModel && matchCategory && matchCondition;
  });

  // function for delete car
  const handleDeleteCar = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCar(id).then((res) => {
          console.log(res);
          if (res.deletedCount > 0) {
            // console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "Contest has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  // =================================================================
  return (
    <>
      <div className="overflow-x-auto">
        {/* ===== */}
        <div>
          <h1 className="text-center font-bold text-3xl text-purple-600 lg:mb-16 underline">
            Manage All Car
          </h1>
        </div>

        {/* ===== */}
        <form>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="space-y-1 text-sm">
              <p className="font-semibold text-slate-500">Category</p>
              <select
                required
                className="py-3 w-[150px] border-2 border-slate-300 focus:outline-purple-500 rounded-md"
                name="category"
                onChange={handleSelectCategory}
              >
                {categories.map((category) => (
                  <option value={category?.label} key={category?.label}>
                    {category?.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <p className="font-semibold text-slate-500">Car Condition</p>
              <select
                required
                className="py-3 w-[130px] border-2 border-slate-300 focus:outline-purple-500 rounded-md"
                name="condition"
                onChange={handleSelectCondition}
              >
                {conditionCar.map((item) => (
                  <option value={item?.type} key={item?.type}>
                    {item?.type}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:ml-auto">
              <p className="font-semibold text-slate-500">Search By Model</p>
              <input
                className="px-4 py-3 w-[300px] text-gray-800 border border-slate-400 focus:outline-purple-500 rounded-md "
                name="carModel"
                type="text"
                placeholder="car model"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-semibold text-xl">
              <th>No</th>
              <th>Model</th>
              <th className="text-center">Image</th>
              <th>Category</th>
              <th>Condition</th>
              <th>Price</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-semibold">
            {filterItems?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td className="">
                  <span>{item.CarModel}</span>
                </td>
                <td>
                  <div className="">
                    <div className="w-36 h-18">
                      <img src={item?.Images?.[3]?.url} alt="" />
                    </div>
                  </div>
                </td>
                <td className="text-center">{item?.Category}</td>
                <td>{item?.CarCondition}</td>
                <td>${item?.CarPriceNew}.00</td>
                <td>
                  <img
                    src={details}
                    onClick={() => handleOpenDetails(item)}
                    className="cursor-pointer"
                    width={35}
                    alt=""
                  />
                </td>
                <td>
                  <Link to={`/dashboard/update-car/${item?._id}`}>
                    <img
                      src={update}
                      className="cursor-pointer"
                      width={35}
                      alt=""
                    />
                  </Link>
                </td>
                <td>
                  <img
                    onClick={() => handleDeleteCar(item?._id)}
                    src={deleteImg}
                    className="cursor-pointer"
                    width={35}
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CarDetailsModal
        car={selectedCar}
        isOpen={isDetailOpen}
        handleCloseDetails={handleCloseDetails}
      />
    </>
  );
};

export default ManageCar;
