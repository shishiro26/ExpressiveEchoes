import { Navigate, Route, Routes } from "react-router-dom";
import Signin from "./pages/signin";
import SignUp from "./pages/signup";
import Home from "./pages/Home";
import UserBlogs from "./pages/UserBlogs";
import { ToastContainer } from "react-toastify";
import About from "./pages/about";

function App() {
  const authToken = sessionStorage.getItem("authToken");
  const isAuth = !!authToken;
  console.log(isAuth);

  return (
    <div className="App">
      <div className="flex flex-row">
        <ToastContainer position="top-left" />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          {isAuth ? (
            <Route path="/blogs" element={<UserBlogs />} />
          ) : (
            <Route path="/blogs" element={<Navigate to="/signin" />} />
          )}
        </Routes>
      </div>
    </div>
  );
}

export default App;
