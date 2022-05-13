import { Link } from "react-router-dom";
import "./authentication.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="box">
        <form className="login-container" method="post" action="">
          <h1>Sign Up</h1>
          <div className="login-credential">
            <div className="login-email">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="login-password">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="confirm-password">
              <label htmlFor="confPwd">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div className="login-btns">
            <button type="submit" className="login">
              Sign Up
            </button>
          </div>

          <Link to="/login" className="new-account">
            Already have an account <strong>&#62;</strong>
          </Link>
        </form>
      </div>
    </div>
  );
};

export { Signup };
