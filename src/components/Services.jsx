// import { services } from "../constants/files";
// const Services = () => {
//   return (
//     <>
//       <div className="container ">
//         <div className="text-box-cont border-y sect-pad">
//           <h2>Our Services</h2>
//           <ul className=" service-grid">
//             {services.map((item) => (
//               <li
//                 className="grid-item"
//                 key={item.id}
//                 style={{ backgroundImage: `url(${item.src})`,maxWidth:"100%" }}
//               >
//                 {/* <div className="">
//                   <img src={item.src} className="z-90" alt="" />
//                 </div> */}
//                 <div className="text-overlay">
//                   <h1 className="services-h">{item.h1}</h1>
//                   <p className="services-p">{item.paragraph}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Services;

import { useAuthStore } from "../store/authStore";
import { useMemo, useState } from "react";
import {
  BarChart,
  ClipboardList,
  FileSpreadsheet,
  Home,
  Receipt,
  TrendingUp,
  UserCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  LogOut,
  Bell,
  FileStack,
  FileEdit,
  LayoutDashboard,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const { isAdmin } = useAuthStore();
  const sidebarRef = useRef(null);

  const { logout, user } = useAuthStore();
  const [isPanelVisible, setPanelVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRecOpen, setIsRecOpen] = useState(false);

  const authState = useMemo(() => ({ isAdmin, user }), [isAdmin, user]);

  const handleLogout = () => {
    logout();

    // two things
    // active color 
    // dropdown nav
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setPanelVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex py-4">
        <button
          onClick={() => setPanelVisible(!isPanelVisible)}
          className="absolute top-4 z-50 right-4 md:hidden p-2 bg-gray-700 text-blue-300 rounded-full focus:outline-none "
        >
          {isPanelVisible ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Left Panel */}
      <div
        ref={sidebarRef}
        style={{ scrollbarWidth: "thin", scrollbarColor: "gray darkgray" }}
        className={`fixed top-0  left-0  w-64 bg-gray-800 p-6 pb-0 my-0 mx-0 min-w-[250px] z-50 overflow-y-auto space-y-4 transform text-white  min-h-[100vh] scrollbar-thin ${
          isPanelVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0`}
      >
        {authState.isAdmin ? (
          <div>
            <h1>PAC Water</h1>
            <h2 className=" text-[20px] flex items-center font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-2 mt-2 border border-gray-500 border-opacity-30 rounded-lg p-3">
              <UserCircle size={40} className="text-white mr-3" />
              <div> {user?.name || "Guest"}</div>
            </h2>
            <h2 className=" font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-2 text-2xl">
              Administrator
            </h2>
            <ul>
              <li
                className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2 ${
                  isActive("/dashboard")
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-700  text-blue-400"
                }`}
              >
                <LayoutDashboard size={18} className="text-white" />
                <Link to="/dashboard" className=" hover:text-blue-300">
                  Dashboard
                </Link>
              </li>
              <li className="cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2">
                <Home size={18} />
                <Link to="/" className="text-blue-400 hover:text-blue-300">
                  Home
                </Link>
              </li>

              <li className="" onClick={() => setIsOpen(!isOpen)}>
                <div className="cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2">
                  <FileEdit size={18} />
                  <Link className="text-blue-400 hover:text-blue-300">
                    Forms
                  </Link>
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="mt-1 space-y-1 text-sm text-gray-300">
                    <li
                      className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2 ${
                        isActive("/forms/idah-operator")
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileSpreadsheet size={18} />
                      <Link to="/forms/idah-operator">Idah Operator</Link>
                    </li>
                    <li
                      className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2 ${
                        isActive("/user-input")
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ClipboardList size={18} />
                      <Link to="/user-input">Sales Input</Link>
                    </li>
                    <li
                      className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2 ${
                        isActive("/forms/daily-production")
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <BarChart size={18} />
                      <Link to="/forms/daily-production">
                        Daily Production Input
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2 ${
                        isActive("/forms/production-stocks")
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TrendingUp size={18} />
                      <Link to="/forms/production-stocks"> Stocks Input</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="" onClick={() => setIsRecOpen(!isRecOpen)}>
                <div className="cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center h-full space-x-2">
                  <FileStack size={18} />
                  <div className="text-blue-400 hover:text-blue-300">
                    Records
                  </div>
                  {isRecOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isRecOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="mt-1 space-y-1 text-sm text-gray-300">
                    <li
                      className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2  ${
                        isActive("/records/idah")
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FileSpreadsheet size={18} />
                      <Link to="/records/idah">Idah Records</Link>
                    </li>
                    <li
                      className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2  ${
                        isActive("/records/sales")
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ClipboardList size={18} />
                      <Link to="/records/sales">Sales</Link>
                    </li>
                    <li
                      className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2  ${
                        isActive("/records/daily-production")
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <BarChart size={18} />
                      <Link to="/records/daily-production">
                        Daily Production Records
                      </Link>
                    </li>
                    <li
                      className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2  ${
                        isActive("/records/production-stocks")
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <TrendingUp size={18} />
                      <Link to="/records/production-stocks">Stocks</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li
                className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 mb-4 mt-2 flex items-center space-x-2  text-blue-400 ${
                  isActive("/notifications")
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-700 text-blue-400"
                }`}
              >
                <Bell size={18} className="text-white" />
                <Link to="/notifications" className="">
                  Notifications
                </Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="list-none w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        ) : (
          // for Employees
          <div>
            <h1>PAC Water</h1>
            <h2 className=" text-[20px] flex items-center font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-6 mt-6 border border-gray-500 border-opacity-30 rounded-lg p-3">
              <UserCircle size={40} className="text-white mr-3" />
              <div> {user?.name || "User"}</div>
            </h2>
            <h2 className=" font-bold bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text mb-2 text-2xl">
              User
            </h2>
            <ul className="space-y-3">
              {/* Visible to Everyone */}
              <li className="cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2">
                <Home size={18} />
                <Link to="/" className=" hover:text-blue-300">
                  Home
                </Link>
              </li>

              <li
                className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2 ${
                  isActive("/user-input")
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-700 text-white"
                }`}
              >
                <ClipboardList size={18} />
                <Link
                  to="/user-input"
                  className="text-inherit hover:text-blue-300"
                >
                  Sales Input
                </Link>
              </li>

              <li
                className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2  ${
                  isActive("/forms/production-stocks")
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-700 text-white"
                }`}
              >
                <TrendingUp size={18} />
                <Link
                  to="/forms/production-stocks"
                  className="hover:text-blue-300"
                >
                  Stocks
                </Link>
              </li>

              <li
                className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2  ${
                  isActive("/forms/idah-operator")
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-700 text-white"
                }`}
              >
                <FileSpreadsheet size={18} />
                <Link
                  to="/forms/idah-operator"
                  className=" hover:text-blue-300"
                >
                  Idah Operator
                </Link>
              </li>

              <li
                className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2 ${
                  isActive("/forms/daily-production")
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-700 text-white"
                }`}
              >
                <BarChart size={18} />
                <Link
                  to="/forms/daily-production"
                  className=" hover:text-blue-300"
                >
                  Daily Production
                </Link>
              </li>

              <li
                className={`cursor-pointer hover:bg-gray-700 rounded-lg p-2 flex items-center space-x-2  ${
                  isActive("/records/sales")
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-700 text-white"
                }`}
              >
                <Receipt size={18} />
                <Link to="/records/sales" className=" hover:text-blue-300">
                  Sales Records
                </Link>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;


