import { useState } from "react";
import SideBar from "../components/sideBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
function SignUp() {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    DOB: "",
  });

  const handleFormData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:6969/user/signup/`,
        userData
      );
      setUserData({ name: "", email: "", password: "", number: "", DOB: "" });
      console.log("Sign-up successful:", response.data);
      toast.success("Sign-up successful");
      Navigate("/signin");
    } catch (err) {
      console.error("Error while sending the request", err);
      toast.error("Error");
    }
  };

  return (
    <div className="flex flex-row">
      <SideBar />
      <section className="bg-gray-50 dark:bg-gray-900 h-screen ">
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-4 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center ">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
              Begin Your Adventure!
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 dark:text-white ">
              Sign up now for a world of discovery, connection, and endless
              possibilities. Join us to access captivating content, engaging
              discussions, and connect with like-minded individuals
            </p>
          </div>
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="text-2xl font-bold tex-gray-900 dark:text-white ">
              {" "}
              {/* p-1:4px */}
              <h2>Sign up to Expressive Echoes </h2>
            </div>
            <form
              action="#"
              onSubmit={handleFormData}
              className="mt-8 space-y-5 "
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-medium dark:text-white"
                >
                  Your Name
                </label>{" "}
                {/*space-y-1 : 4px */}
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={userData.name}
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="test"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-medium dark:text-white"
                  htmlFor="email"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="test@gmail.com"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-medium dark:text-white "
                    htmlFor="number"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    value={userData.number}
                    onChange={(e) => {
                      setUserData({ ...userData, number: e.target.value });
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="***** *****"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-medium dark:text-white"
                    htmlFor="dob"
                  >
                    Date-Of-Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    value={userData.DOB}
                    onChange={(e) => {
                      setUserData({ ...userData, DOB: e.target.value });
                    }}
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-medium dark:text-white"
                  htmlFor="password"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userData.password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  autoComplete="off"
                  required
                />
              </div>{" "}
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-medium dark:text-white"
                  htmlFor="password"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  autoComplete="off"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create account
              </button>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Have an account ?{" "}
                <Link
                  to="/signin"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login to your account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
