import UseToGetUserAddedCarByEmail from "../../../Hooks/UseToGetUserAddedCarByEmail";
import details from "../../../assets/Images/details.png";
import update from "../../../assets/Images/update.png";
import deleteImg from "../../../assets/Images/delete.png";
import pending from "../../../assets/Images/pending.gif";
import approve from "../../../assets/Images/approve.gif";
import { Link } from "react-router-dom";

const UserGarage = () => {
  const [userAddedCarByEmail] = UseToGetUserAddedCarByEmail();
  console.log(userAddedCarByEmail);
  return (
    <>
      <div className="overflow-x-auto">
        {/* ===== */}
        <div>
          <h1 className="text-center font-bold text-3xl text-purple-600 lg:mb-16 underline">
            My Garage
          </h1>
        </div>

        {/* ===== */}
        {/* <form>
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
                {userAddedCarByEmail.map((item) => (
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
        </form> */}
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
              <th>Status</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-semibold">
            {userAddedCarByEmail?.map((item, index) => (
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
                  {item?.CarStatus === "pending" ? (
                    <div className="">
                      <div className="w-12 h-12">
                        <img src={pending} alt="" />
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <div className="w-12 h-12">
                        <img src={approve} alt="" />
                      </div>
                    </div>
                  )}
                  {item?.CarStatus}
                </td>
                <td>
                  <img
                    src={details}
                    // onClick={() => handleOpenDetails(item)}
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
                    // onClick={() => handleDeleteCar(item?._id)}
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

      {/* <CarDetailsModal
      car={selectedCar}
      isOpen={isDetailOpen}
      handleCloseDetails={handleCloseDetails}
    /> */}
    </>
  );
};

export default UserGarage;
