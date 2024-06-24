import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CheckoutForm from "./CheckoutForm";

const PaymentModal = ({ car, closeModal, isOpen, customerInfo }) => {
  console.log(customerInfo);
  console.log(car);

  return (
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  <p className="text-2xl font-bold">
                    <span>Buy</span> {car?.CarModel}
                  </p>
                </Dialog.Title>
                <div className="mt-2">
                  <div>
                    <img src={car?.Images?.[2]?.url} alt="" />
                  </div>
                  <p className="text-xl font-bold text-gray-500">
                    Price: $ {car?.CarPriceNew}
                  </p>
                </div>
                {/* customer data */}
                <div>
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold">
                      Customer Information
                    </h2>
                    <table className="min-w-full border-collapse block md:table mt-4">
                      <thead className="block md:table-header-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
                          <th className="bg-purple-600 text-xl p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                            Type
                          </th>
                          <th className="bg-purple-600 p-2 text-xl text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                            Customer Data
                          </th>
                        </tr>
                      </thead>
                      <tbody className="block md:table-row-group">
                        {Object.keys(customerInfo).map((key) => (
                          <tr
                            key={key}
                            className="bg-purple-100 border border-grey-500 md:border-none block md:table-row"
                          >
                            <td className="p-2 md:border font-semibold text-[16px] md:border-grey-500 text-left block md:table-cell">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </td>
                            <td className="p-2 md:border  md:border-grey-500 text-left block md:table-cell">
                              {customerInfo[key]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* customer data */}
                <hr className="mt-8 " />
                {/* Card data form */}
                {/* checkout form */}
                {/* <Elements stripe={stripePromise}> */}
                <CheckoutForm closeModal={closeModal} car={car} />
                {/* </Elements> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PaymentModal;
