import useAuth from "../../../../Hooks/UseAuth";
import messageImg from "../../../../assets/Images/message.png";
import alertImg from "../../../../assets/Images/alert.png";
import { dateFormate, getGreeting } from "./../../../../api/utils";

const AdminDashboardNavbar = () => {
  const todayDate = new Date();

  const { user } = useAuth();
  // console.log(user);
  const greeting = getGreeting();
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg shadow-purple-50 font-roboto">
        <div className="flex-1">
          <h1 className="font-bold text-xl">
            <span className="bg-purple-400 pl-3 text-white py-1 rounded-md">
              {greeting}
            </span>
            , {user?.displayName}
            <p className="text-[16px] font-normal text-slate-500">
              Today, Let's catch up what's unfolding in your store
            </p>
            <p className="text-[12px] ">{dateFormate(todayDate)}</p>
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

export default AdminDashboardNavbar;
