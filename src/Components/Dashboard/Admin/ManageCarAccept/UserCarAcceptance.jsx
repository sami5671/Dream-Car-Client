import UseToGetAllUserAddedCar from "../../../../Hooks/UseToGetAllUserAddedCar";
import details from "../../../../assets/Images/details.png";
import update from "../../../../assets/Images/update.png";
import message from "../../../../assets/Images/message.png";
import deleteImg from "../../../../assets/Images/delete.png";
import pending from "../../../../assets/Images/pending.gif";
import cancel from "../../../../assets/Images/cancel.gif";
import approve from "../../../../assets/Images/approve.gif";
import CarDetailsModal from "../../Moderator/MaanageCar/CarDetailsModal";
import { useState } from "react";
import {
  addCar,
  deleteUserAddedCar,
  updateUserCarStatus,
} from "../../../../api/Cars";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import CarStatusModal from "./CarStatusModal";
import CommentModal from "./CommentModal";

const UserCarAcceptance = () => {
  const [allUserAddedCar, refetch] = UseToGetAllUserAddedCar();
  const [isDetailOpen, setDetailOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState([]);
  const [carData, setCarData] = useState([]);

  const [isOpenComment, setIsOpenComment] = useState(false);
  const [selectedCarIdComment, setSelectedCarIdComment] = useState(null);

  const handleOpenModalComment = (id) => {
    setSelectedCarIdComment(id);
    // console.log(selectedCarIdComment);
    setIsOpenComment(true);
  };
  const handleCloseModalComment = () => {
    setIsOpenComment(false);
  };

  const handleOpenDetails = (item) => {
    setSelectedCar(item);
    setDetailOpen(true);
  };
  const handleCloseDetails = () => {
    setDetailOpen(false);
    setSelectedCar(null);
  };

  const [selectedCarId, setSelectedCarId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(users);
  const handleOpenModal = (id, car) => {
    setSelectedCarId(id);
    setCarData(car);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedCarId(null);
    setCarData(null);
  };

  // console.log(carData);
  const modalHandler = async (status) => {
    // console.log(status, selectedCarId);
    try {
      const data = await updateUserCarStatus(selectedCarId, status);
      refetch();

      if (status === "accepted") {
        const { _id, CarStatus, ...newCarData } = carData;
        console.log(newCarData);
        const data = await addCar(newCarData);
        console.log(data);
      }
      toast.success(`Car is ${status}`);
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsOpen(false);
    }
  };

  const handleErrorUpdate = (item) => {
    toast.error(`${item} can not be updated after accepted`);
  };
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
        deleteUserAddedCar(id).then((res) => {
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
  return (
    <>
      <div className="overflow-x-auto">
        {/* ===== */}
        <div>
          <h1 className="text-center font-bold text-3xl text-purple-600 lg:mb-16 underline">
            Accept User's Cars
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
              <th>Comment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-[16px] font-semibold">
            {allUserAddedCar?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td className="">
                  <span>{item.CarModel}</span>
                </td>
                <td>
                  <div className="">
                    <div className="w-36 h-18">
                      <img src={item?.Images?.[2]?.url} alt="" />
                    </div>
                  </div>
                </td>
                <td className="text-center">{item?.Category}</td>
                <td>{item?.CarCondition}</td>
                <td>${item?.CarPriceNew}.00</td>
                <td>
                  {item?.CarStatus === "pending" ? (
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10">
                        <img src={pending} alt="" />
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                  {item?.CarStatus === "cancel" ? (
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10">
                        <img src={cancel} alt="" />
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                  {item?.CarStatus === "accepted" ? (
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10">
                        <img src={approve} alt="" />
                      </div>
                    </div>
                  ) : (
                    " "
                  )}
                  {item?.CarStatus}
                </td>
                <td>
                  <div className="flex items-center justify-center">
                    <img
                      src={details}
                      onClick={() => handleOpenDetails(item)}
                      className="cursor-pointer"
                      width={35}
                      alt=""
                    />
                  </div>
                </td>
                <td className="">
                  {item?.CarStatus === "accepted" ? (
                    <div onClick={() => handleErrorUpdate(item?.CarModel)}>
                      <img
                        src={update}
                        className="cursor-pointer"
                        width={35}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div
                      className="flex items-center justify-center"
                      onClick={() => handleOpenModal(item?._id, item)}
                    >
                      <img
                        src={update}
                        className="cursor-pointer"
                        width={35}
                        alt=""
                      />
                    </div>
                  )}
                </td>
                <td>
                  <div
                    onClick={() => handleOpenModalComment(item)}
                    className="flex items-center justify-center"
                  >
                    <img
                      onClick={() => handleOpenModalComment(item)}
                      src={message}
                      className="cursor-pointer"
                      width={35}
                      alt=""
                    />
                    <span className="absolute px-2 cursor-pointer rounded-badge bg-red-700 text-white ml-3 mt-4">
                      {item?.comments?.length}
                    </span>
                  </div>
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
      <CarStatusModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        modalHandler={modalHandler}
      />
      <CommentModal
        isOpen={isOpenComment}
        handleCloseModalComment={handleCloseModalComment}
        selectedCarIdComment={selectedCarIdComment}
        refetchComment={refetch}
      />
    </>
  );
};

export default UserCarAcceptance;
