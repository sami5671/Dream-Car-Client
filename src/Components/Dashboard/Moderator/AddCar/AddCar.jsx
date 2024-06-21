import { useState } from "react";
import { uploadCloudinary } from "../../../../api/utils";
import { categories } from "../../../Categories/CategoriesData";
import { addCar } from "../../../../api/Cars";
import toast from "react-hot-toast";
import uploadImg from "../../../../assets/Images/upload.gif";

const AddCar = () => {
  const [images, setImages] = useState([]);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Car Images");
  const [loading, setLoading] = useState(false);

  const carCondition = [
    {
      id: 1,
      name: "Brand New",
    },
    {
      id: 2,
      name: "Used",
    },
  ];
  const Drivetrain = [
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
  const Transmission = [
    {
      id: 1,
      label: "Manual",
    },
    {
      id: 2,
      label: "Automatic",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);

    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        arr.push(data);
        console.log(arr);
      }
      setUploadButtonText("Successfully uploaded!");

      const carData = {
        CarModel: form.carModel.value,
        CarCondition: form.carCondition.value,
        Category: form.category.value,
        TopSpeed: form.topSpeed.value,
        FuelType: form.fuel.value,
        FuelCapacity: form.fuelCapacity.value,
        Mileage: form.mileage.value,
        Engine: form.engineCategory.value,
        CarPriceNew: form.newPrice.value,
        CarPricePrevious: form.previousPrice.value,
        ExteriorColor: form.exteriorColor.value,
        InteriorColor: form.interiorColor.value,
        Drivetrain: form.drivetrain.value,
        Transmission: form.transmission.value,
        Seating: form.seating.value,
        Images: arr,
      };

      const data = await addCar(carData);
      toast.success("Car added successfully");
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/*add car form */}
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-purple-700 underline">
            Add Car
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
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
                >
                  {categories.map((category) => (
                    <option value={category.label} key={category.label}>
                      {category.label}
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
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="fuelCapacity" className="block text-gray-600">
                    Fuel Capacity
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="fuelCapacity"
                    type="number"
                    placeholder="Fuel Capacity"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="Drivetrain" className="block text-gray-600">
                  Drivetrain
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-purple-400 focus:outline-purple-500 rounded-md"
                  name="drivetrain"
                >
                  {Drivetrain.map((item) => (
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
                >
                  {Transmission.map((item) => (
                    <option value={item.label} key={item.id}>
                      {item?.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="CarCondition" className="block text-gray-600">
                  Car Condition
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-purple-400 focus:outline-purple-500 rounded-md"
                  name="carCondition"
                >
                  {carCondition.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        type="file"
                        className="text-sm cursor-pointer w-36 hidden"
                        multiple={true}
                        onChange={(e) => setImages(e.target.files)}
                      />
                      <div className="bg-purple-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-purple-500">
                        {uploadButtonText}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="newPrice" className="block text-gray-600">
                    New Price
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="newPrice"
                    type="text"
                    placeholder="New Price"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="previousPrice"
                    className="block text-gray-600"
                  >
                    Previous Price
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="previousPrice"
                    type="text"
                    placeholder="Previous Price"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="exteriorColor"
                    className="block text-gray-600"
                  >
                    Exterior Color
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="exteriorColor"
                    type="text"
                    placeholder="Exterior Color"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="interiorColor"
                    className="block text-gray-600"
                  >
                    Interior Color
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="interiorColor"
                    type="text"
                    placeholder="Interior Color"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="Mileage" className="block text-gray-600">
                    Mileage (km)
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="mileage"
                    type="number"
                    placeholder="Mileage"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="Seating" className="block text-gray-600">
                    Seating
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border border-purple-400 focus:outline-purple-500 rounded-md "
                    name="seating"
                    type="number"
                    placeholder="Seating"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            {loading ? (
              <button className="w-full border-2 py-2 border-dashed border-purple-800">
                <span className="flex justify-center">
                  <img src={uploadImg} width={30} alt="" />
                </span>
              </button>
            ) : (
              <button className="w-full border-2 bg-purple-600 py-2 text-white font-bold">
                <span>Add Car</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
