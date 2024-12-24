import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ForgotPassword from "./ForgotPassword";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Loder from "../Loder/Loder";
import { addUser } from "../../shope/userslice";
import { loaderFalse, loaderTrue } from "../../shope/loaderSlice";
const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader);

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(loaderTrue());
      const result = await axios.post("/api/user/log-in", {
        email,
        password: pass,
      });
      console.log(result);
      if (result?.data?.success === false) {
        throw new Error(result?.data?.message || "Login failed");
      }
      if (result.data.success) {
        dispatch(addUser(result.data.data));
        dispatch(loaderFalse());
        navigate("/");
      } else {
        throw new Error(result?.data?.message);
      }
    } catch (error) {
      dispatch(loaderFalse());
      alert(error.message);
    }
  };

  return (
    <>
      {loader && <Loder />}
      <div
        className="login-page sp bg-cover"
        style={{ backgroundImage: "url(/public/img/bg/cta4-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-main-heading">
                <div className="page-prog ">
                  <Link to="/" className="text-decoration-none text-light">
                    Home
                  </Link>
                  <span>
                    <i className="fa-solid fa-angle-right text-light" />
                  </span>
                  <p className="bold mt-3 text-light">Login</p>
                </div>
                <h1 className="text-light">Login</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 m-auto">
              <div className="login-form mt-5">
                <h3>Welcome Back</h3>
                <p>Please fill your email and password to sign in.</p>
                <form onSubmit={handelLogin}>
                  <div className="single-input">
                    <label>Email</label>
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                    />
                  </div>
                  <div className="single-input">
                    <label>Password</label>
                    <input
                      type="password"
                      onChange={(e) => setPass(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="button mt-4">
                    <button type="submit" className="theme-btn1">
                      Sign In
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="text">
                      Don’t have an account?{" "}
                      <Link to="/signup" className="text-decoration-none mx-2">
                        Sign Up Today.
                      </Link>{" "}
                      <br />
                      <Button
                        variant="primary"
                        className="mx-2"
                        onClick={() => setShow(true)}
                      >
                        Forgot Password
                      </Button>
                      <ForgotPassword show={show} setShow={setShow} />
                    </p>
                    <p className="or">
                      <span>Or</span>
                    </p>
                    <Link to="#" className="google-btn text-decoration-none">
                      <img src="/public/img/icons/google.svg" alt="vexon" />{" "}
                      Sign Up With Google
                    </Link>
                    <Link
                      to="#"
                      className="google-btn mt-2 text-decoration-none"
                    >
                      <img src="/public/img/icons/facebook.svg" alt="vexon" />{" "}
                      Sign Up With Facebook
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
