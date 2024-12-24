/* eslint-disable react/prop-types */

import { Modal } from "react-bootstrap";

const ResetPassword = ({ showReset, setShowReset }) => {
  return (
    <>
      <Modal
        show={showReset}
        onHide={() => setShowReset(false)}
        backdrop="static"
      >
        <div className="login-form">
          <Modal.Header closeButton>
            <div className="text-center">
              <div className="forgot-icon">
                <img src="/public/img/icons/reset.svg" alt="vexon" />
              </div>
              <Modal.Title>Reset Password</Modal.Title>
              <p>
                If you want to reset your password, please enter your new
                password below.
              </p>
            </div>
          </Modal.Header>
          <Modal.Body>
            <form action="#">
              <div className="single-input">
                <label>New Password</label>
                <input type="password" placeholder="New Password" />
              </div>
              <div className="single-input">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <div className="button ">
              <button
                type="submit"
                className="theme-btn1"
                onClick={() => setShowReset(false)}
              >
                Change Password
              </button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ResetPassword;
