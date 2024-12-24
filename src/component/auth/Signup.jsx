import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Verify from "./Verify";
import { useDispatch, useSelector } from "react-redux";
import Loder from "../Loder/Loder";
import { loaderFalse, loaderTrue } from "../../shope/loaderSlice";

const Signup = () => {
  const [username, seUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({});
  const loader = useSelector((state) => state.loader);
  const [showVerify, setShowVerify] = useState(false);
  const dispatch = useDispatch();

  const register = async (e) => {
    e.preventDefault();
    dispatch(loaderTrue());
    try {
      console.log("show", show);
      const data = await axios.post("/api/user/register", {
        username,
        email,
        password,
      });
      console.log(data.data);
      if (data?.data?.success) {
        setValues(data?.data?.data);
        dispatch(loaderFalse());
        setShow(true);
      } else {
        throw new Error(data?.data?.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {loader && <Loder />}
      <Verify showVerify={show} values={values} setShowVerify={setShow} />
      <div
        className="login-page sp bg-cover"
        style={{ backgroundImage: "url(/public/img/bg/square.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-main-heading">
                <div className="page-prog">
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  <p className="bold mt-3">Sign Up</p>
                </div>
                <h1>Sign Up</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 m-auto mt-3">
              <div className="login-form">
                <h3>Create Your Account</h3>
                <p>Create an account today and start using Vexon</p>
                <form onSubmit={register}>
                  <div className="single-input">
                    <label>Name</label>
                    <input
                      type="text"
                      onChange={(e) => seUsername(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
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
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="button mt-4">
                    <button type="submit" className="theme-btn1">
                      Create An Account
                    </button>
                  </div>
                  <div className="text-start">
                    <p className="text">
                      <input type="checkbox" name="checkbox1" id="checkbox1" />{" "}
                      <label aria-colspan="checkbox1" htmlFor="checkbox1">
                        I have read and agree to the{" "}
                      </label>
                      <Link to="#">Terms &amp; Consitions.</Link>
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
                    <Verify
                      showVerify={showVerify}
                      setShowVerify={setShowVerify}
                      values={values}
                    ></Verify>
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

export default Signup;
