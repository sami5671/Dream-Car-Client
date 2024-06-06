import { useState } from "react";
import { uploadCloudinary } from "../../../../api/utils";

const AddCar = () => {
  const [images, setImages] = useState([]);
  const [link, setLink] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        arr.push(data);
      }
      console.log(arr);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>add car</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple={true}
          onChange={(e) => setImages(e.target.files)}
        />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AddCar;
