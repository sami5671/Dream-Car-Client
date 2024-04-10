import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Logo2 from "../../Components/Shared/Logo2";

const Login = ({ isLoginOpen, closeLoginModal }) => {
  return (
    <>
      <Transition appear show={isLoginOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLoginModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center items-center min-h-screen">
                    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-900">
                      <p className="animate-pulse flex items-center justify-center">
                        <Logo2 />
                      </p>
                      <div className="mb-8">
                        <h1 className="my-3 text-4xl font-bold bg-gradient-to-br from-cyan-600 to-red-300 text-transparent bg-clip-text">
                          Login Now
                        </h1>
                        <p className="text-sm text-gray-400">
                          Sign in to access your account
                        </p>
                      </div>
                      <form
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
                              Email address
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              required
                              placeholder="Enter Your Email Here"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
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
                              autoComplete="current-password"
                              id="password"
                              required
                              placeholder="@#(UIN!1"
                              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="bg-cyan-500 w-full rounded-md py-3 text-white"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                      <div className="space-y-1">
                        <button className="text-xs hover:underline hover:text-rose-500 text-gray-400">
                          Forgot password?
                        </button>
                      </div>
                      <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">
                          Login with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                      </div>
                      <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                      </div>
                      <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
                        <FaGithub size={32} />

                        <p>Continue with GitHub</p>
                      </div>
                      <p className="px-6 text-sm text-center text-gray-400">
                        Don&apos;t have an account yet?
                        <Link className="hover:underline hover:text-cyan-500 text-gray-600">
                          Sign up
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

export default Login;
