import { Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Logo2 from "../../Components/Shared/Logo2";
import useAuth from "../../Hooks/UseAuth";
import { imageUpload } from "../../api/utils";
import { getToken, saveUser } from "../../api/auth";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const SignUp = ({ openSignUpModal, closeSignUpModal, isSignUpOpen }) => {
  // ----------------------------------------------------------------

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  // -------------------------Sign Up functionalities---------------------------------------
  const [uploadButtonText, setUploadButtonText] = useState(
    "Upload Profile Picture"
  );

  const { createUser, updateUserProfile, signInWithGoogle, loading } =
    useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      // uploading img to imgBB

      const imageData = await imageUpload(image);

      // user registration
      const result = await createUser(email, password);
      // console.log(result);
      // save username and profile photo
      await updateUserProfile(name, imageData?.data?.display_url);

      // save user data in database
      const dbResponse = await saveUser(result?.user);
      // console.log(dbResponse);
      //5. get token
      await getToken(result?.user?.email);
      navigate(from, { replace: true });
      closeSignUpModal(true);
      setUploadButtonText("Upload Profile Picture");
      toast.success("SignUp Successful");
      // ----------------------------------------------------------------
    } catch (err) {
      // console.log(err);
      toast.error(err?.message);
    }
  };

  //---------------- handle Google Sign In --------------------
  const handleGoogleSignIn = async () => {
    try {
      // user registration with google
      const result = await signInWithGoogle();
      // console.log(result);

      // save user data in database
      const dbResponse = await saveUser(result?.user);
      // console.log(dbResponse);

      //5. get token
      await getToken(result?.user?.email);
      navigate(from, { replace: true });
      closeSignUpModal(true);
      toast.success("SignUp Successful");
      // ----------------------------------------------------------------
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  // ----------------------------------------------------------------
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  // ----------------------------------------------------------------
  return (
    <>
      <Transition appear show={isSignUpOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeSignUpModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                  <div className="flex justify-center items-center min-h-screen ">
                    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-900 ">
                      <p className="animate-pulse flex items-center justify-center">
                        <Logo2 />
                      </p>
                      <div className="mb-8">
                        <h1 className="my-3 text-4xl font-bold bg-gradient-to-br from-purple-600 to-green-200 text-transparent bg-clip-text">
                          Sign Up
                        </h1>
                        <p className="text-sm text-gray-400">
                          Welcome to Dream Car
                        </p>
                      </div>
                      <form
                        onSubmit={handleSubmit}
                        noValidate=""
                        action=""
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                      >
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Enter Your Name Here"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900"
                              data-temp-mail-org="0"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              required
                              placeholder="Enter Your Email Here"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900"
                              data-temp-mail-org="0"
                            />
                          </div>
                          <div>
                            <div className="flex justify-between">
                              <label
                                htmlFor="password"
                                className="text-sm mb-2"
                              >
                                Password
                              </label>
                            </div>
                            <input
                              type="password"
                              name="password"
                              autoComplete="new-password"
                              id="password"
                              required
                              placeholder="*******"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900"
                            />
                          </div>
                        </div>
                        <div className=" bg-white w-full  m-auto rounded-lg">
                          <div className="file_upload px-5 py-3 relative border-4 border-dotted border-black rounded-lg">
                            <div className="flex flex-col w-max mx-auto text-center">
                              <label>
                                <input
                                  onChange={(e) =>
                                    handleImageChange(e.target.files[0])
                                  }
                                  className="text-sm cursor-pointer w-36 hidden"
                                  type="file"
                                  name="image"
                                  id="image"
                                  accept="image/*"
                                  hidden
                                />
                                <div className="bg-purple-800 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-purple-700">
                                  {uploadButtonText}
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          {loading ? (
                            <button
                              type="submit"
                              className="bg-purple-800 w-full rounded-md py-3 text-white flex items-center justify-center"
                            >
                              <ImSpinner9 className="animate-spin" />
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="bg-purple-800 w-full rounded-md py-3 text-white hover:bg-purple-700"
                            >
                              Submit
                            </button>
                          )}
                        </div>
                      </form>
                      <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">
                          SignUp with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                      </div>
                      <div
                        onClick={handleGoogleSignIn}
                        className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-black hover:text-white"
                      >
                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                      </div>
                      <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer hover:bg-black hover:text-white">
                        <FaGithub size={32} />

                        <p>Continue with GitHub</p>
                      </div>
                      <p className="px-6 text-sm text-center text-gray-400">
                        Already have an account?
                        <Link
                          to="/loginPage"
                          className="hover:underline hover:text-purple-500 text-gray-600"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
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

export default SignUp;
