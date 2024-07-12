import { useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/utils";
import toast from "react-hot-toast";
import Container from "../Shared/Container";
import ProfileModal from "./ProfileModal";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleUpdateUserProfile = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const address = form.address.value;

    // console.log(name, image, address);

    try {
      const imageData = await imageUpload(image);
      await updateUserProfile(name, imageData?.data?.display_url);
      setLoading(false);
      setIsOpen(false);
      toast.success("Updated profile Successfully");
    } catch (error) {
      console.log(error.message);
      toast.error(error?.message);
    }
  };

  console.log(user);
  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white border-2 border-purple-300 shadow-2xl shadow-purple-300 rounded-xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              alt="profile"
              src={user.photoURL}
              className="rounded-full h-24 w-24 border-4 border-purple-800 shadow-lg"
            />
            <p className="mt-4 text-2xl font-semibold text-gray-800">
              {user.displayName}
            </p>
            <p className="mt-1 text-sm text-gray-500">{user.email}</p>
          </div>
          <div className="text-center mb-6">
            <p className="text-gray-700">
              <span className="font-medium">User ID:</span> {user.uid}
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={openModal}
              className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200"
            >
              Update Profile
            </button>
          </div>

          <ProfileModal
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
            handleUpdateUserProfile={handleUpdateUserProfile}
            loading={loading}
          />
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
