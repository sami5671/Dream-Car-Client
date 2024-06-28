import UseToGetAllUsers from "../../../../Hooks/UseToGetAllUsers";
import updatelogo from "../../../../assets/Images/update.png";
import deletelogo from "../../../../assets/Images/delete.png";
import adminlogo from "../../../../assets/Images/admin.png";
import moderatorlogo from "../../../../assets/Images/moderatorr.png";
import userlogo from "../../../../assets/Images/user.png";
import { useState } from "react";
import UserRoleModal from "./UserRoleModal";
import { deleteUser, updateUserRole } from "../../../../api/Cars";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, refetch] = UseToGetAllUsers();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(users);
  const handleOpenModal = (id) => {
    setSelectedUserId(id);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedUserId(null);
  };

  const modalHandler = async (role) => {
    console.log(role, selectedUserId);
    try {
      const data = await updateUserRole(selectedUserId, role);
      refetch();
      toast.success(`This User Now ${role}`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsOpen(false);
    }
  };

  const handleDeleteUser = (id) => {
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
        deleteUser(id).then((res) => {
          console.log(res);
          if (res.deletedCount > 0) {
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
    <div>
      <h1 className="text-center mb-12 text-2xl text-purple-800 font-bold">
        Manage Users
        <hr />
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg text-white p-4">
        <table className="table table-auto w-full text-left border-collapse">
          {/* head */}
          <thead>
            <tr className="bg-purple-950 text-gray-300">
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Set Role</th>
              <th className="px-4 py-2">Delete User</th>
              <th className="px-4 py-2">User Status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {users.map((item, index) => (
              <tr
                key={item._id}
                className="text-black hover:bg-slate-200 transition-colors"
              >
                <td className="px-4 py-2 font-bold">{index + 1}</td>
                <td className="font-bold">{item?.name}</td>
                <td className="font-bold">{item?.email}</td>
                <td>
                  <div className="">
                    <img
                      className="rounded-full h-12 w-12"
                      src={item?.photo}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => handleOpenModal(item?._id)}
                    className="cursor-pointer"
                  >
                    <img
                      className="rounded-full h-10 w-10"
                      src={updatelogo}
                      alt="Update Logo"
                    />
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => handleDeleteUser(item?._id)}
                    className="cursor-pointer"
                  >
                    <img
                      className="rounded-full h-10 w-10"
                      src={deletelogo}
                      alt="Update Logo"
                    />
                  </div>
                </td>
                <td>
                  {item?.role === "user" ? (
                    <div
                      // onClick={() => handleOpenUpdateOrder(item?._id)}
                      className="cursor-pointer"
                    >
                      <img
                        className="rounded-full h-10 w-10"
                        src={userlogo}
                        alt="Update Logo"
                      />
                      <p className="text-black font-semibold">(User)</p>
                    </div>
                  ) : (
                    " "
                  )}
                  {item?.role === "admin" ? (
                    <div
                      // onClick={() => handleOpenUpdateOrder(item?._id)}
                      className="cursor-pointer"
                    >
                      <img
                        className="rounded-full h-10 w-10"
                        src={adminlogo}
                        alt="Update Logo"
                      />
                      <p className="font-bold text-orange-700">(Admin)</p>
                    </div>
                  ) : (
                    " "
                  )}
                  {item?.role === "moderator" ? (
                    <div
                      // onClick={() => handleOpenUpdateOrder(item?._id)}
                      className="cursor-pointer"
                    >
                      <img
                        className="rounded-full h-10 w-10"
                        src={moderatorlogo}
                        alt="Update Logo"
                      />
                      <p className=" font-bold text-green-400">(Moderator)</p>
                    </div>
                  ) : (
                    " "
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <OrderStatusModal
      updateOrder={updateOrder}
      handleCloseUpdateOrder={handleCloseUpdateOrder}
      modalHandler={modalHandler}
    />  */}
      <UserRoleModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        modalHandler={modalHandler}
      />
    </div>
  );
};

export default ManageUsers;
