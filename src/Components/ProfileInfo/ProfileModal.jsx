import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
const ProfileModal = ({
  closeModal,
  isOpen,
  handleUpdateUserProfile,
  loading,
}) => {
  const [uploadButtonText, setUploadButtonText] = useState(
    "Upload Your Profile Picture"
  );

  const handleUploadPicture = (e) => {
    const imgName = e.target.files[0]?.name || "Upload Your Profile Picture";
    setUploadButtonText(imgName);
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-center underline  font-bold leading-6 text-purple-800  lg:mb-10 py-6"
                  >
                    Update Your Profile
                  </Dialog.Title>
                  <form
                    onSubmit={handleUpdateUserProfile}
                    className="space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-purple-800"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Your Name"
                        className="mt-1 block w-full px-4 py-2 border border-purple-300 rounded-md shadow-sm sm:text-sm bg-gray-100"
                      />
                    </div>

                    {/* --- */}
                    <label
                      htmlFor="image"
                      className="block text-sm font-bold text-purple-800"
                    >
                      Select Image
                    </label>
                    <div className=" bg-white w-full  m-auto rounded-lg">
                      <div className="file_upload px-2 py-2 relative border-2 border-gray-300 rounded-lg">
                        <div className="flex flex-col w-max mx-auto text-center">
                          <label>
                            <input
                              type="file"
                              id="image"
                              name="image"
                              accept="image/*"
                              className="text-sm cursor-pointer w-36 hidden"
                              onChange={handleUploadPicture}
                            />
                            <div className="bg-purple-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-purple-500">
                              {uploadButtonText}
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* =----- */}
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Enter Your Address"
                        className="mt-1 block w-full px-4 py-2 border border-purple-300 rounded-md shadow-sm sm:text-sm bg-gray-100"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center  w-full py-2 rounded-md font-bold text-white hover:bg-purple-700 bg-purple-800"
                    >
                      {loading ? (
                        <ImSpinner2 className="animate-spin h-5 w-5 mr-2" />
                      ) : (
                        "Update Profile"
                      )}
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ProfileModal;
