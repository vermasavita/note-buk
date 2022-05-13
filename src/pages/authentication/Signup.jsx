import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";
import { signUpService } from "../../services";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const checkInputFields = () => {
    return (
      user.email !== "" && user.password !== "" && user.confirmPassword !== ""
    );
  };

  const checkPassword = () => {
    if (user.password !== user.confirmPassword) {
      toast.error("Password doesn't match");
    } else {
      return true;
    }
  };

  const signUpHandler = async (event) => {
    event.preventDefault();
    if (checkInputFields()) {
      if (checkPassword()) {
        try {
          const response = await signUpService(user);
          if (response.status === 201) {
            navigate("/notes");
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.createdUser)
            );

            authDispatch({
              type: "SIGNUP",
              payload: {
                user: response.data.createdUser,
                token: response.data.encodedToken,
              },
            });

            toast.success("Successfuly Signed In");
          } else {
            throw new Error("Something went wrong! Please try again later");
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      toast.error("Enter all the fields");
    }
  };
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
                value={user.email}
                onChange={changeHandler}
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
                value={user.password}
                onChange={changeHandler}
              />
            </div>

            <div className="confirm-password">
              <label htmlFor="confPwd">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={user.confirmPassword}
                onChange={changeHandler}
              />
            </div>
          </div>

          <div className="login-btns">
            <button type="submit" className="login" onClick={signUpHandler}>
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
