import { Link } from "react-router-dom";
import "./authentication.css";

const Login = () => {
 
  return (
    <div className="container">
      <div className="box">
        <form className="login-container" method="post">
          <h1>Login</h1>
          <div className="login-credential">
            <div className="login-email">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="adarshbalika@gmail.com"
                required
              />
            </div>

            <div className="login-password">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="**********"
                required
              />
            </div>
          </div>

          <div className="login-btns">
            <button className="new-account">
              Add Guest Credential
            </button>
            <button className="login" type="submit">
              Login
            </button>
          </div>

          <Link to="/signup" className="new-account">
            Create New Account <strong>&#62;</strong>
          </Link>
        </form>
      </div>
    </div>
  );
};

export { Login };
