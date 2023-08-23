import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

function shuffleBlogs(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Blogs() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("http://localhost:6969/blog/");
        const updatedBlogData = await Promise.all(
          response.data.message.map(async (blog) => {
            const authorName = await fetchAuthorData(blog.author);
            return { ...blog, authorName };
          })
        );

        setBlogData(shuffleBlogs(updatedBlogData));
      } catch (err) {
        console.log("Error while fetching the data.. in the home page ", err);
      }
    };

    const fetchAuthorData = async (authorId) => {
      try {
        const responseUser = await axios.get(
          `http://localhost:6969/user/${authorId}`
        );
        return responseUser.data.message.name;
      } catch (err) {
        console.log("Error while fetching the userData in the homepage ", err);
        return "Unknown Author";
      }
    };

    fetchBlogData();
  }, []);

  return (
    <section className="min-w-[80vw] bg-gray-50 dark:bg-gray-900">
      <ul className="h-screen overflow-auto">
        <li className="p-2.5">
          <div className="w-full bg-gray-800 shadow-xl rounded-lg p-2.5">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-3xl dark:text-white w-full">
                Expressive Echoes
              </h1>
            </div>

            <p className="mb-4 text-lg text-gray-300 lg:text-xl dark:text-gray-400">
              Hello there! I`m Shishiro, an enthusiastic aspiring full stack
              developer with a passion for creating meaningful and dynamic web
              applications. Welcome to my blog website, Expressive Echoes, where
              I`m excited to share my journey, insights, and experiences in the
              world of web development{" "}
              <NavLink to="/about" className="text-blue-600 hover:underline">
                read more...
              </NavLink>
            </p>
            <div>
              <h4 className="text-lg text-gray-300">written by</h4>
              <span className="text-blue-600 hover:underline dark:text-blue-500">
                Shishiro
              </span>
            </div>
          </div>
        </li>{" "}
        {blogData.length === 0 ? (
          <Loader />
        ) : (
          blogData.map((blog, key) => (
            <li key={key} className="p-2.5">
              <div className="w-full bg-gray-800 shadow-xl rounded-lg p-2.5">
                <div>
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-3xl dark:text-white w-full">
                    {blog.title}
                  </h1>
                </div>

                <p className="mb-4 text-lg text-gray-300 lg:text-xl dark:text-gray-400">
                  {blog.content}
                </p>
                <div>
                  <h4 className="text-lg text-gray-300">written by</h4>
                  <span className="text-blue-600 hover:underline dark:text-blue-500">
                    {blog.authorName}
                  </span>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default Blogs;
