import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ReactPlayer from "react-player";
import { IoMdCloseCircleOutline } from "react-icons/io";

const BannerVideoModal = ({ isVideoOpen, closeVideoModal }) => {
  return (
    <Transition appear show={isVideoOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeVideoModal}>
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
              <Dialog.Panel className="transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-end">
                  <button
                    onClick={closeVideoModal}
                    className="text-white text-2xl"
                  >
                    <IoMdCloseCircleOutline />
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <ReactPlayer
                    controls={true}
                    width={900}
                    height={450}
                    playing={true}
                    // url="https://youtu.be/Xyso8qMX2Mk?si=r1TNGm3gC_WbiGAD"
                    url="https://youtu.be/rVt3Tp5sbh8?si=xehQFW294sQq9mv8"
                    // url="https://youtu.be/MZQz4mf2Q8g?si=w3JJBE1aWZgPWy6w"
                    // url="https://youtu.be/2mtPFknPulY?si=jZGr1VhjoSqpbFwC"
                    // url="https://youtu.be/rrdL5pnmBT0?si=Hg_yDC1fQZ8_ylgZ"
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BannerVideoModal;
