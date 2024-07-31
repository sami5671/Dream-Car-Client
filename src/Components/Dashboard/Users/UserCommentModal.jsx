import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import adminImg from "../../../assets/Images/admin.png";
import parse from "html-react-parser";

const UserCommentModal = ({
  isOpen,
  handleCloseModalComment,
  selectedCarComment,
}) => {
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
                  <div>
                    <p className="text-xl  text-center text-purple-900 font-bold">
                      comment from Admin {selectedCarComment?.CarModel}
                    </p>
                    <div className="flex items-center justify-center">
                      <img
                        className="w-[200px] lg:w-[200px]"
                        src={selectedCarComment?.Images?.[2].url}
                        alt=""
                      />
                    </div>
                  </div>

                  {selectedCarComment?.comments?.map((item) => (
                    <div key={item?._id}>
                      <div className="flex gap-6">
                        <div>
                          <img
                            className="rounded-full w-[60px] h-[60px]"
                            src={adminImg}
                            alt=""
                          />
                          <span>Admin</span>
                        </div>
                        <div className="mt-10 w-1/2">
                          <p>{parse(item)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UserCommentModal;
