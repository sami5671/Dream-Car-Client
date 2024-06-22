import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "../../../Shared/Navbar/MenuDropdown.css";

const CarDetailsModal = ({ isOpen, handleCloseDetails, car }) => {
  // console.log(car);

  const carModel = car?.CarModel;
  const modalImg = car?.Images?.[3]?.url;
  const condition = car?.CarCondition;
  const category = car?.Category;
  const topSpeed = car?.TopSpeed;
  const fuelType = car?.FuelType;
  const mileage = car?.Mileage;
  const engine = car?.Engine;
  const priceNew = car?.CarPriceNew;
  const pricePrevious = car?.CarPricePrevious;
  const exteriorColor = car?.ExteriorColor;
  const interiorColor = car?.InteriorColor;
  const drivetrain = car?.Drivetrain;
  const transmission = car?.Transmission;
  const seating = car?.Seating;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          onClose={handleCloseDetails}
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
                      <img src={modalImg} className="" alt="" />
                      <h1 className="text-xl font-bold">{carModel}</h1>
                    </div>
                  </Dialog.Title>

                  <div className="flex mt-5 gap-2">
                    <div className="w-full">
                      <p>
                        <span className="font-bold">Condition:</span>
                        {condition}
                      </p>
                      <p>
                        <span className="font-bold">Category:</span> {category}
                      </p>
                      <p>
                        <span className="font-bold">TopSpeed:</span> {topSpeed}{" "}
                        (km)
                      </p>
                      <p>
                        <span className="font-bold">Fuel Type:</span> {fuelType}
                      </p>
                      <p>
                        <span className="font-bold">Mileage:</span> {mileage}
                      </p>
                      <p>
                        <span className="font-bold">Engine:</span> {engine}
                      </p>
                      <p>
                        <span className="font-bold">New Price:</span> {priceNew}
                      </p>
                      <p>
                        <span className="font-bold">Previous Price:</span>{" "}
                        {pricePrevious}
                      </p>
                    </div>

                    <div className="w-full">
                      <p>
                        <span className="font-bold">Exterior Color:</span>{" "}
                        {exteriorColor}
                      </p>
                      <p>
                        <span className="font-bold">Interior Color:</span>{" "}
                        {interiorColor}
                      </p>
                      <p>
                        <span className="font-bold">Drivetrain:</span>{" "}
                        {drivetrain}
                      </p>
                      <p>
                        <span className="font-bold">Transmission:</span>{" "}
                        {transmission}
                      </p>
                      <p>
                        <span className="font-bold">Seating:</span> {seating}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      className="hover:bg-red-400 rounded-2xl px-6 py-1 bg-red-500 text-white font-semibold"
                      onClick={handleCloseDetails}
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

export default CarDetailsModal;
