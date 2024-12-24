import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";

import "./assets/bootstrap.min.css";
import Profile from "./admin/Profile";
import Dashboard from "./admin/Dashboard";
import CreateBlog from "./component/CreateBlog";
import Navbar from "./component/Nav&Footer/Navbar";
import MobileSidebar from "./component/Nav&Footer/MobileSidebar";
import Footer from "./component/Nav&Footer/Footer";
import Home from "./component/homePage/Home";
import Contact from "./component/Contact/Contact";
import Blogs from "./component/Blog/Blog";
import BlogDetails from "./component/Blog/BlogDetails";
import Loder from "./component/Loder/Loder";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addUser, removeUser } from "./shope/userslice";
function App() {
  const loader = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await axios.get("/api/user/check-auth");
        console.log(data);
        if (!data.data?.success) {
          throw new Error("cannot found user");
        }
        dispatch(addUser(data.data.data));
      } catch (error) {
        console.log(error.message);
        dispatch(removeUser());
      }
    };

    return () => {
      checkAuth();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {loader && <Loder />}
        <Navbar />
        <MobileSidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create/blog" element={<CreateBlog />} />
          <Route path="/user/profile/:id" element={<Profile />} />
          <Route path="/user/admin/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
