import { NavLink } from "react-router-dom";
import Logout from "./logout";
import { useEffect, useState } from "react";
import axios from "axios";
function SideBar() {
  const authorId = sessionStorage.getItem("authorId");
  const token = sessionStorage.getItem("authToken");
  const isAuth = !!sessionStorage.getItem("authToken");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6969/user/${authorId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(response.data.message);
      } catch (err) {
        console.log("Error while fetching the data..", err);
      }
    };

    fetchBlogData();
  }, []);
  return (
    <>
      <aside
        id="default-sidebar"
        className=" top-0 left-0 z-1 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-[100%] px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink className="flex items-center p-2 tet-gray-1000 rounded-sm dark:text-white">
                <span className="ml-3 text-2xl">ExpressiveEchoes</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 aria-[current=page]:bg-gray-600"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group aria-[current=page]:bg-gray-600"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">about</span>
              </NavLink>
            </li>
            {authorId ? (
              <>
                <li>
                  <NavLink
                    to="/blogs"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group aria-[current=page]:bg-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Echoes
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
                    >
                      <path d="M824-450H323v-60h501l-89-89 43-43 162 162-162 162-43-43 89-89ZM580-570v-210H180v600h400v-210h60v210q0 24.75-17.625 42.375T580-120H180q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h400q24.75 0 42.375 17.625T640-780v210h-60Z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      <Logout />
                    </span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/signin"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group aria-[current=page]:bg-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                      />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {" "}
                      Sign In
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group aria-[current=page]:bg-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                      <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                      <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign Up
                    </span>
                  </NavLink>
                </li>
              </>
            )}
            {isAuth ? (
              <li className="fixed bottom-0">
                <div className="w-full mb-4 flex items-center p-2 border border-none rounded-md bg-gray-700 cursor-pointer text-gray-900 dark:text-white">
                  <img
                    src={userData.image}
                    alt={userData.name}
                    className="flex-shrink-0 w-6 h-6 rounded-sm"
                  />
                  <h3 className="text-xl ml-3">{userData.name}</h3>
                </div>
              </li>
            ) : (
              <li className="fixed bottom-0">
                <div className="w-full mb-4 flex items-center p-2 border border-none rounded-lg bg-gray-700 cursor-pointer text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <h3 className="text-xl ml-3">Login</h3>
                </div>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
}
export default SideBar;
