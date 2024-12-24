/* eslint-disable react/prop-types */
import { useState } from "react";
import ResetPassword from "./ResetPassword";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
const Verify = ({ showVerify, setShowVerify, values = {} }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showReset, setShowReset] = useState(false);
  const loader = useSelector((state) => state.loader);
  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only numbers and update the corresponding OTP index
    if (/^\d{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;

      // Update OTP state
      setOtp(newOtp);

      // Move focus to the next input if the current one is filled
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Handle keydown event (Backspace and other keys)
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Focus on the previous input if current input is empty
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // Handle key up event to prevent non-numeric input
  const handleKeyUp = (e, index) => {
    const value = e.target.value;

    // If the value is not a digit, clear it
    if (!/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };
  const handleVerify = () => {
    setShowVerify(false);
    setShowReset(true);
    setOtp(["", "", "", "", "", ""]);
  };

  const checkOtp = async () => {
    try {
      const result = await axios.post("/api/user/check-otp", {
        otp: otp.reduce((i, n) => i + n),
        ...values,
      });
      console.log(result);
      if (!result.data.success) {
        throw new Error("invalid otp");
      }
      setShowVerify(false);
      setOtp(["", "", "", "", "", ""]);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {loader}
      <Modal
        show={showVerify}
        onHide={() => setShowVerify(false)}
        backdrop="static"
      >
        <div className="login-form">
          <Modal.Header closeButton>
            <div className="text-center">
              <div className="forgot-icon">
                <img src="/public/img/icons/verify.svg" alt="vexon" />
              </div>
              <Modal.Title>Verify Your Email!</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p className="m-2">
              We sent you an OTP via email. Please Enter it to verify your email
              address if you don’t see it, please wait up to 5 mins or check
              your SPAM folder.
            </p>
            <div className="otp-container d-flex justify-content-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  id={`otp-input-${index}`}
                  value={digit}
                  className="form-control otp-input text-center"
                  maxLength="1"
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onKeyUp={(e) => handleKeyUp(e, index)} // Ensure non-numeric input is cleared
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="mt-4">
              <button className="theme-btn1" onClick={checkOtp}>
                Validate
              </button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
      {/* <ResetPassword showReset={showReset} setShowReset={setShowReset} /> */}
    </>
  );
};

export default Verify;
