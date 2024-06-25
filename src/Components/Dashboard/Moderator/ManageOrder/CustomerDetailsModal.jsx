import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
const CustomerDetailsModal = ({
  isOpenCustomer,
  CloseModalCustomer,
  customer,
}) => {
  return (
    <>
      <Transition appear show={isOpenCustomer} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          onClose={CloseModalCustomer}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 " />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="border-2 border-dashed border-purple-400 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-gray-900"
                  >
                    <div>
                      {/* <img src={modalImg} className="" alt="" />
                      <h1 className="text-xl font-bold">{carModel}</h1> */}
                      customer
                    </div>
                  </Dialog.Title>

                  <div className="flex justify-end">
                    <button
                      className="hover:bg-red-400 rounded-2xl px-6 py-1 bg-red-500 text-white font-semibold"
                      onClick={CloseModalCustomer}
                    >
                      close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CustomerDetailsModal;
