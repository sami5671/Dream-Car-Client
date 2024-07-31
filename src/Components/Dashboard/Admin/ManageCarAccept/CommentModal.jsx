import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import toast from "react-hot-toast";
import { commentUserAddedCar, deleteAdminComment } from "../../../../api/Cars";
import Swal from "sweetalert2";
import UseToGetAllUserAddedCar from "../../../../Hooks/UseToGetAllUserAddedCar";
import cancelImg from "../../../../assets/Images/cancel.gif";
const CommentModal = ({
  isOpen,
  handleCloseModalComment,
  selectedCarIdComment,
  refetchComment,
}) => {
  const [, refetch] = UseToGetAllUserAddedCar();
  const [loading, setLoading] = useState(false);
  // =================================================================
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const data = await commentUserAddedCar(selectedCarIdComment?._id, {
      content,
    });
    refetch();
    toast.success("Commented successfully!!");
    handleCloseModalComment();
    setContent("");
  };

  //   =================================================================
  const handleDeleteComment = (id) => {
    setLoading(true);
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
        deleteAdminComment(id).then((res) => {
          if (res.modifiedCount > 0) {
            refetchComment();
            handleCloseModalComment();
            toast.success("Comment deleted successfully");
          }
        });
      }
      setLoading(false);
    });
  };
  // =================================================================

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={handleCloseModalComment}
      >
        <div className="fixed inset-0 bg-black bg-opacity-70" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full lg:w-[800px] p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <div className="flex justify-end ">
                    <img
                      onClick={handleCloseModalComment}
                      src={cancelImg}
                      className="w-[30px] cursor-pointer"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-xl  text-center text-purple-900 font-bold">
                      Add your comment for {selectedCarIdComment?.CarModel}
                    </p>
                    <div className="flex items-center justify-center">
                      <img
                        className="w-[200px] lg:w-[200px]"
                        src={selectedCarIdComment?.Images?.[2].url}
                        alt=""
                      />
                    </div>
                  </div>
                </Dialog.Title>
                <div className="mt-2">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onChange={(newContent) => setContent(newContent)}
                  />
                </div>

                <div className="flex justify-between ">
                  {content === "" ? (
                    <button
                      disabled
                      className="bg-purple-800 px-3 hover:bg-purple-600 text-white font-bold py-1 mt-4 rounded-md"
                    >
                      Submit Comment
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="bg-purple-800 px-3 hover:bg-purple-600 text-white font-bold py-1 mt-4 rounded-md"
                    >
                      Submit Comment
                    </button>
                  )}

                  <button
                    onClick={() =>
                      handleDeleteComment(selectedCarIdComment?._id)
                    }
                    className="bg-red-800 px-3 hover:bg-red-600 text-white font-bold py-1 mt-4 rounded-md"
                  >
                    {loading ? "Loading...." : "Remove Comment"}
                  </button>
                </div>

                {/* test */}
                <div>{content}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CommentModal;
