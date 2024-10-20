import { dateFormate, getGreeting } from "../../../../api/utils";
import useAuth from "../../../../Hooks/UseAuth";
import messageImg from "../../../../assets/Images/message.png";
import alertImg from "../../../../assets/Images/alert.png";
const ModeratorDashboardNavbar = () => {
  const todayDate = new Date();

  const { user } = useAuth();
  // console.log(user);
  const greeting = getGreeting();
  return (
    <>
      <div className="navbar text-white font-roboto">
        <div className="flex-1">
          <h1 className="font-bold text-xl">
            <span className="pl-3 bg-white text-black py-1 rounded-md">
              {greeting}
            </span>
            , {user?.displayName}
            <p className="text-[16px] font-normal text-slate-300">
              Today, Let's catch up what's unfolding in your store
            </p>
            <p className="text-[14px] ">{dateFormate(todayDate)}</p>
          </h1>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-3">
          {/* message */}
          <div>
            <img src={alertImg} className="w-[35px] h-[35px]" alt="" />
          </div>
          {/* alert message */}
          <div>
            <img src={messageImg} className="w-[35px] h-[35px]" alt="" />
          </div>
          {/* icon */}
          <div>
            <div className="">
              <img
                src={user?.photoURL}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeratorDashboardNavbar;
