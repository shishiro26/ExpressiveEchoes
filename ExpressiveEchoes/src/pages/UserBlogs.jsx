import SideBar from "../components/sideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import UserLoader from "./UserLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserBlogs() {
  const authorId = sessionStorage.getItem("authorId");
  const authToken = sessionStorage.getItem("authToken");
  const [blogData, setBlogData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [userData, setUserData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(false);
  const [userBlogData, setUserBlogData] = useState([]);
  const [updatedData, setUpdatedData] = useState({
    title: "",
    content: "",
  });
  const [blogId, setBlogId] = useState();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6969/blog/author/${authorId}`
        );
        setBlogData(response.data.message);
      } catch (err) {
        console.log("Error while fetching the data.. related to user ", err);
      }
    };

    fetchBlogData();
    userFetch();
  }, []);

  const userFetch = async () => {
    try {
      const responseUser = await axios.get(
        `http://localhost:6969/user/${authorId}`
      );
      // console.log(`Response user ${JSON.stringify(responseUser)}`);
      setUserData(responseUser.data.message.name);
    } catch (err) {
      console.log("Error while fetching the userData in the userblogs", err);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:6969/blog/${authorId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setBlogData([...blogData, response.data]);
      setFormData({ title: "", content: "" });
      toast.success("Blog Created SuccessFully");
      setTimeout(() => window.location.reload(), 1000);
    } catch (err) {
      console.log("Error while creating a new blog... in the userblogs", err);
      toast.error("Error! while creating a new blog... ");
    }
  };

  const deleteBlog = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:6969/blog/delete/${authorId}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log(response.data.message);
      toast.success("Deleted the Blog!");
    } catch (err) {
      console.log("Deleted", err);
      toast.error("Error in deleting the blog in the userblogs ", err);
    }
  };

  const updateBlog = async () => {
    try {
      const response = await axios.put(
        `http://localhost:6969/blog/update/${blogId}`,
        {
          title: updatedData.title,
          content: updatedData.content,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log("Response sent successfully", response);
      window.location.reload(true);
    } catch (err) {
      toast.error("Error while updating the blog.. in the userblogs");
      console.error(err);
    }
  };

  const fetchUserBlog = async (id) => {
    try {
      const response = await axios.get(`http://localhost:6969/blog/${id}`, {
        headers: {
          Authorization: `Bearer${authToken}`,
        },
      });
      // console.log(`This is the blog data`, response.data);
      setUserBlogData(response.data.message);
      console.log(userBlogData);
    } catch (error) {
      console.log("Error while fetching the user... in the userblogs ", error);
    }
  };

  return (
    <div className="flex flex-row">
      <SideBar />
      <section className="h-screen bg-gray-50 dark:bg-gray-900 overflow-auto">
        <div className="py-3 px-4 mx-auto max-w-screen-xl lg:py-0 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center  rounded-lg dark:bg-white-800 p-2.5 ">
            {selectedBlog ? (
              <>
                <div className="space-y-6">
                  <h1 className="text-3xl tracking-light leading-none font-bold dark:text-white">
                    Update a New Blog
                  </h1>

                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder={userBlogData.title}
                      value={updatedData.title}
                      onChange={(e) =>
                        setUpdatedData({
                          ...updatedData,
                          title: e.target.value,
                        })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="content"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your message
                    </label>
                    <textarea
                      name="content"
                      id="content"
                      rows="4"
                      placeholder={userBlogData.content}
                      value={updatedData.content}
                      onChange={(e) =>
                        setUpdatedData({
                          ...updatedData,
                          content: e.target.value,
                        })
                      }
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <button
                    className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                      updateBlog();
                      setSelectedBlog(false);
                    }}
                  >
                    Update Blog
                  </button>
                </div>
              </>
            ) : (
              <>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h1 className="text-3xl tracking-light leading-none font-bold dark:text-white">
                    Create a New Blog
                  </h1>

                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="ex:This is a title"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="content"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your message
                    </label>
                    <textarea
                      name="content"
                      id="content"
                      rows="4"
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                      placeholder="Write your thoughts here..."
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create Blog
                  </button>
                </form>
              </>
            )}
          </div>
          <div>
            <ul className="h-screen overflow-auto">
              <li>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  Your Echoes
                </h1>
              </li>
              {blogData.length === 0 ? (
                <UserLoader />
              ) : (
                blogData.map((blog, key) => (
                  <li key={key} className="p-1.5 ">
                    <div className="top-0 w-full bg-gray-800 shadow-xl rounded-lg p-2.5">
                      <div>
                        <h1 className="mb-4 text-2xl font-semibold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-2xl dark:text-white w-[100%]">
                          {blog.title}
                        </h1>
                      </div>

                      <p className="mb-4 text-lg text-gray-300 lg:text-xl dark:text-gray-400">
                        {blog.content}
                      </p>
                      <div className="flex justify-between">
                        <div>
                          <h4 className="text-lg text-gray-300">written by</h4>
                          <span className="text-blue-600 hover:underline dark:text-blue-500">
                            {userData}
                          </span>
                        </div>

                        <div className="flex justify-around">
                          <button
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group aria-[current=page]:bg-gray-600 fill-gray-100"
                            onClick={() => {
                              setSelectedBlog(true);
                              fetchUserBlog(blog._id);
                              setBlogId(blog._id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="48"
                              viewBox="0 -960 960 960"
                              width="48"
                              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            >
                              <path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
                            </svg>
                          </button>
                          <button
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  group aria-[current=page]:bg-gray-600"
                            onClick={() => deleteBlog()}
                          >
                            <svg
                              className="flex-shrink-0 w-5 h-5  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white fill-gray-100"
                              xmlns="http://www.w3.org/2000/svg"
                              height="48"
                              viewBox="0 -960 960 960"
                              width="48"
                            >
                              <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserBlogs;
