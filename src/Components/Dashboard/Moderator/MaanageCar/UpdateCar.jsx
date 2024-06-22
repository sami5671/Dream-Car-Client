import { useLoaderData, useNavigate } from "react-router-dom";
import { categories } from "../../../Categories/CategoriesData";
import { useState } from "react";
import { updateCarInfo } from "../../../../api/Cars";
import toast from "react-hot-toast";
import updateImg from "../../../../assets/Images/upload2.png";
const UpdateCar = () => {
  const car = useLoaderData();
  const navigate = useNavigate();
  //   console.log(car);

  // Destructure car details
  const {
    _id,
    CarModel,
    CarCondition,
    Category,
    TopSpeed,
    FuelType,
    FuelCapacity,
    Mileage,
    Engine,
    CarPriceNew,
    CarPricePrevious,
    ExteriorColor,
    InteriorColor,
    Drivetrain,
    Transmission,
    Seating,
  } = car;

  const [loading, setLoading] = useState(false);

  const carConditionOptions = [
    {
      id: 1,
      name: "Brand New",
    },
    {
      id: 2,
      name: "Used",
    },
  ];
  const drivetrainOptions = [
    {
      id: 1,
      label: "(FWD) Front-Wheel Drive",
    },
    {
      id: 2,
      label: "(RWD) Rear-Wheel Drive",
    },
    {
      id: 3,
      label: "(AWD) All-Wheel Drive",
    },
    {
      id: 4,
      label: "(4WD) Four-Wheel Drive",
    },
    {
      id: 5,
      label: "(EV) Electric Drivetrain",
    },
  ];
  const transmissionOptions = [
    {
      id: 1,
      label: "Manual",
    },
    {
      id: 2,
      label: "Automatic",
    },
  ];

  const handleUpdateCar = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;

    const CarModel = form.carModel.value;
    const CarCondition = form.carCondition.value;
    const Category = form.category.value;
    const TopSpeed = form.topSpeed.value;
    const FuelType = form.fuel.value;
    const FuelCapacity = form.fuelCapacity.value;
    const Mileage = form.mileage.value;
    const Engine = form.engineCategory.value;
    const CarPriceNew = form.price.value;
    const CarPricePrevious = form.carPricePrevious.value;
    const ExteriorColor = form.exterior.value;
    const InteriorColor = form.interior.value;
    const Drivetrain = form.drivetrain.value;
    const Transmission = form.transmission.value;
    const Seating = form.seating.value;

    const carData = {
      CarModel,
      CarCondition,
      Category,
      TopSpeed,
      FuelType,
      FuelCapacity,
      Mileage,
      Engine,
      CarPriceNew,
      CarPricePrevious,
      ExteriorColor,
      InteriorColor,
      Drivetrain,
      Transmission,
      Seating,
    };
    // console.log(carData);

    try {
      const data = await updateCarInfo(_id, carData);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success(`${CarModel} Updated successfully`);
        setLoading(false);
        navigate("/dashboard/manage-car");
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      {/*add car form */}
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-purple-700 underline">
            Update Car Info
          </h1>
        </div>
        <form onSubmit={handleUpdateCar}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="car model" className="block text-gray-600">
                  Car Model
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                  name="carModel"
                  type="text"
                  placeholder="car model"
                  required
                  defaultValue={CarModel}
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="category" className="block text-gray-600">
                  Category
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-purple-400 focus:outline-purple-500 rounded-md"
                  name="category"
                  defaultValue={Category}
                >
                  {categories.map((item) => (
                    <option value={item.label} key={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* ---  */}
              <div className="space-y-1 text-sm">
                <label htmlFor="engineCategory" className="block text-gray-600">
                  Engine Type
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-purple-400 focus:outline-purple-500 rounded-md"
                  name="engineCategory"
                  defaultValue={Engine}
                >
                  {categories.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="topSpeed" className="block text-gray-600">
                    Top Speed
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="topSpeed"
                    type="number"
                    placeholder="Top Speed"
                    required
                    defaultValue={TopSpeed}
                    min={0}
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="fuel" className="block text-gray-600">
                    Fuel Type
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="fuel"
                    type="text"
                    placeholder="Fuel Type"
                    required
                    defaultValue={FuelType}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="fuelCapacity" className="block text-gray-600">
                    Fuel Capacity
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="fuelCapacity"
                    type="text"
                    placeholder="Fuel Capacity"
                    required
                    defaultValue={FuelCapacity}
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="mileage" className="block text-gray-600">
                    Mileage
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="mileage"
                    type="number"
                    placeholder="Mileage"
                    required
                    defaultValue={Mileage}
                    min={0}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="exterior" className="block text-gray-600">
                    Exterior Color
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="exterior"
                    type="text"
                    placeholder="Exterior Color"
                    required
                    defaultValue={ExteriorColor}
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="interior" className="block text-gray-600">
                    Interior Color
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="interior"
                    type="text"
                    placeholder="Interior Color"
                    required
                    defaultValue={InteriorColor}
                  />
                </div>
              </div>
            </div>

            {/* col 2  */}
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Car Price (New)
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                  name="price"
                  type="text"
                  placeholder="Car Price (New)"
                  required
                  defaultValue={CarPriceNew}
                  min={0}
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="carPricePrevious"
                  className="block text-gray-600"
                >
                  Car Price (Previous)
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                  name="carPricePrevious"
                  type="text"
                  placeholder="Car Price (Previous)"
                  required
                  defaultValue={CarPricePrevious}
                  min={0}
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="carCondition" className="block text-gray-600">
                  Car Condition
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-purple-400 focus:outline-purple-500 rounded-md"
                  name="carCondition"
                  defaultValue={CarCondition}
                >
                  {carConditionOptions.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="seating" className="block text-gray-600">
                  Seating
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                  name="seating"
                  type="number"
                  placeholder="Seating"
                  required
                  defaultValue={Seating}
                  min={0}
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="drivetrain" className="block text-gray-600">
                  Drivetrain
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-purple-400 focus:outline-purple-500 rounded-md"
                  name="drivetrain"
                  defaultValue={Drivetrain}
                >
                  {drivetrainOptions.map((item) => (
                    <option value={item.label} key={item.id}>
                      {item?.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="transmission" className="block text-gray-600">
                  Transmission
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-purple-400 focus:outline-purple-500 rounded-md"
                  name="transmission"
                  defaultValue={Transmission}
                >
                  {transmissionOptions.map((item) => (
                    <option value={item.label} key={item.id}>
                      {item?.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6">
            {loading ? (
              <button className="w-full border-2 py-2 border-dashed border-purple-800">
                <span className="flex justify-center">
                  <img src={updateImg} width={30} alt="" />
                </span>
              </button>
            ) : (
              <button className="w-full border-2 bg-purple-600 py-2 text-white font-bold">
                <span>Update Car</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
