import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/sideBar";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function Signin() {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:6969/user/login`,
        userData
      );

      setUserData({ ...userData, email: "", password: "" });
      console.log(response.data);

      sessionStorage.setItem("authToken", response.data.token);
      sessionStorage.setItem("authorId", response.data.user.id);

      Navigate("/");

      toast.success("Login successful");
    } catch (error) {
      console.log("Error during login:", error);
      toast.error("Error while logging in");
    }
  };

  return (
    <div className="flex flex-row ">
      <SideBar />

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Welcome Back !!
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Sign in now to connect, engage, and explore a world of captivating
              content and vibrant discussions with like-minded individuals.
            </p>
          </div>
          <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Sign in to Expressive Echoes
              </h2>
              <form className="mt-8 space-y-6" onSubmit={onFormSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="test@gmail.com"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <Link
                    href="#"
                    className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>

                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Not registered yet?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Create account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;
