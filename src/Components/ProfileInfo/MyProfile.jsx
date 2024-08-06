import { useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../api/utils";
import toast from "react-hot-toast";
import Container from "../Shared/Container";
import ProfileModal from "./ProfileModal";
import UseAdmin from "../../Hooks/UseAdmin";
import UseModerator from "./../../Hooks/UseModerator";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const [isAdmin] = UseAdmin();
  const [isModerator] = UseModerator();

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
      <div className="min-h-screen flex flex-col justify-center items-center text-white">
        <div className="shadow-xl shadow-slate-500 rounded-xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              alt="profile"
              src={user.photoURL}
              className="rounded-full h-24 w-24 border-4 border-white shadow-lg"
            />
            {isAdmin ? (
              <span className="bg-white text-black px-2 py-1 rounded-full absolute mb-6 lg:mb-0 lg:mt-2 font-bold">
                Admin
              </span>
            ) : isModerator ? (
              <span className="bg-white text-black px-2 py-1 rounded-full absolute mb-6 lg:mb-0 lg:mt-2 font-bold">
                Moderator
              </span>
            ) : (
              <span className="bg-white text-black px-2 py-1 rounded-full absolute mb-6 lg:mb-0 lg:mt-2 font-bold">
                User
              </span>
            )}
            <p className="mt-12 text-2xl font-semibold">{user.displayName}</p>
            <p className="mt-1 text-sm">{user.email}</p>
          </div>
          <div className="text-center mb-6">
            <p className="text-gray-400">
              <span className="font-medium text-white">User ID:</span>{" "}
              {user.uid}
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={openModal}
              className="text-white  px-6 py-2 rounded-full bg-gradient-to-tl from-blue-500 via-slate-700 to-slate-100 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200"
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
