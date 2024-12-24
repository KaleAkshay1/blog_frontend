import navLogo from "/public/img/logo/header-logo1.png";
import contactImg from "/public/img/icons/footer1-icon1.svg";
import locationImg from "/public/img/icons/footer1-icon2.svg";
import phoneImg from "/public/img/icons/footer1-icon3.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const MobileSidebar = () => {
  const [resBtn, setResbtn] = useState(false);
  const [responsiveLinks, setResponsiveLinks] = useState(false);

  const handleClose = () => {
    if (resBtn) {
      setResbtn(!resBtn);
    } else {
      setResbtn(true);
    }
  };

  const handleResNav = () => {
    console.log("dfsdf");
    if (responsiveLinks == true) {
      setResponsiveLinks(!responsiveLinks);
    } else {
      setResponsiveLinks(!responsiveLinks);
    }
  };

  return (
    <div>
      <div className="mobile-header mobile-header-main d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="d-flex gap-3">
                <div
                  className="mobile-nav-icon ms-3"
                  onClick={() => handleClose()}
                >
                  <i className="fa-solid fa-bars"></i>
                </div>
                <div className="mobile-logo">
                  <Link to="/">
                    <img src={navLogo} alt="vexon" />
                  </Link>
                </div>
              </div>
              <div>login</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mobile-sidebar d-block d-lg-none ${
          resBtn && "mobile-menu-active"
        }`}
      >
        <div className="logo-m">
          <Link to="/">
            <img src={navLogo} alt="vexon" />
          </Link>
        </div>
        <div className="menu-close" onClick={() => handleClose()}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="mobile-nav">
          <ul>
            <li className="hash-has-sub" onClick={() => handleClose()}>
              <Link to="/" className="hash-nav">
                Home
              </Link>
            </li>
            <li className="hash-has-sub" onClick={() => handleClose()}>
              <Link to="/blogs" className="hash-nav">
                Blogs
              </Link>
            </li>

            <li
              className="has-dropdown has-sub hash-has-sub"
              onClick={() => handleResNav()}
            >
              <span
                className={`submenu-button ${
                  responsiveLinks ? "submenu-opened" : ""
                }`}
              >
                <em></em>
              </span>
              <Link to="/blog" className="hash-nav">
                Categories{" "}
              </Link>
              <ul
                className="sub-menu"
                style={{ display: responsiveLinks ? "block" : "none" }}
              >
                <li className="hash-has-sub" onClick={() => handleClose()}>
                  <Link to="/" className="hash-nav">
                    Home 1
                  </Link>
                </li>
                <li className="hash-has-sub" onClick={() => handleClose()}>
                  <Link to="/" className="hash-nav">
                    Home 2
                  </Link>
                </li>
                <li className="hash-has-sub" onClick={() => handleClose()}>
                  <Link to="/" className="hash-nav">
                    Home 3
                  </Link>
                </li>
                <li className="hash-has-sub" onClick={() => handleClose()}>
                  <Link to="/" className="hash-nav">
                    Home 4
                  </Link>
                </li>
              </ul>
            </li>

            <li className="hash-has-sub" onClick={() => handleClose()}>
              <Link to="/contact" className="hash-nav">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="mobile-button hash-has-sub">
            <a className="theme-btn1 hash-nav" href="contact.html">
              Get A Quote <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="footer-contact-area1 md:pl-0 pl-20 sm:pl-0 mt-30">
            <h3 className="text-24 leading-26 font-semibold title1 pb-10">
              Get in touch
            </h3>
            <div className="contact-box d-flex">
              <div className="icon">
                <img src={contactImg} alt="vexon" />
              </div>
              <div className="text hash-has-sub">
                <Link to="mailto:contact@vexon.com" className="hash-nav">
                  contact@vexon.com
                </Link>
              </div>
            </div>

            <div className="contact-box d-flex">
              <div className="icon">
                <img src={locationImg} alt="vexon" />
              </div>
              <div className="text hash-has-sub">
                <Link to="#" className="hash-nav">
                  123 Innovation Drive,
                  <br />
                  Tech City, ST 12345, USA
                </Link>
              </div>
            </div>

            <div className="contact-box d-flex">
              <div className="icon">
                <img src={phoneImg} alt="vexon" />
              </div>
              <div className="text hash-has-sub">
                <Link to="tel:123-456-7890" className="hash-nav">
                  123-456-7890
                </Link>
              </div>
            </div>
          </div>

          <div className="contact-infos">
            <h3>Our Social Network</h3>
            <ul className="social-icon">
              <li className="hash-has-sub">
                <Link to="/" className="hash-nav">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li className="hash-has-sub">
                <Link to="/" className="hash-nav">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
              </li>
              <li className="hash-has-sub">
                <Link to="/" className="hash-nav">
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </li>
              <li className="hash-has-sub">
                <Link to="/src" className="hash-nav">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
