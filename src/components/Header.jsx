import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);  


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };


  return (
    <header className="header">
      <div className="logo">
        <h1>Manish</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink exact to="/about">About</NavLink>
          </li>
          <li>
            <NavLink exact to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink exact to="/support">Support</NavLink>
          </li>
          <li>
          <NavLink exact to="/form" activeClassName="active-link">Form</NavLink>
          </li>
        </ul>
      </nav>
      <div className="user-actions">
        <button className="login-btn" onClick={openLoginModal}>Login</button>
        <button className="signup-btn" onClick={openModal}>
          Sign Up
        </button>
      </div>


      {/* Registration Modal */}
      {isModalOpen && (
        <div className="registration-modal-overlay">
          <div className="registration-modal">
            <h2>Register</h2>
            <form>
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" />
              </div>

              {/* Gender */}
              <div className="form-group">
                <label>Gender</label>
                <div>
                  <input type="radio" id="male" name="gender" value="male"/>
                  <label htmlFor="male">Male</label>
                </div>

                <div>
                  <input type="radio" id="female" name="gender" value="female"/>
                  <label htmlFor="female">Female</label>
                </div>

                <div>
                  <input type="radio" id="other" name="gender" value="other"/>
                  <label htmlFor="other">Other</label>
                </div>
              </div>

              {/* Agree */}
              <div className="form-group">
                <input type="checkbox" id="agree" name="agree" />
                <label htmlFor="agree">I agree </label>
              </div>

              {/* Submit Button */}
              <button className="register-button">Register</button>
            </form>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}

      {isLoginModalOpen && (
        <div className="registration-modal-overlay">
          <div className="registration-modal">
            <h2>Login</h2>
            <form>
              {/*Email*/}
              <div className="form-group">
                <label htmlFor="loginEmail">Email</label>
                <input type="email" id="loginEmail" name="loginEmail" />
              </div>

              {/*Password */}
              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" name="loginPassword"/>
              </div>

              {/*Submit btn */}
              <button className="login-button">Login</button>
            </form>
            <button className="close-modal" onClick={closeLoginModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
