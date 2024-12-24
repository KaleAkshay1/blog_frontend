import Hero from "./Hero";
import Blogs from "./Blogs";
import Categories from "./Categories";
import TrendingBlogs from "./TrendingBlogs";
import { useSelector } from "react-redux";
const Home = () => {
  return (
    <div>
      <Hero />
      <Blogs />
      <Categories />
      <TrendingBlogs />
    </div>
  );
};

export default Home;
