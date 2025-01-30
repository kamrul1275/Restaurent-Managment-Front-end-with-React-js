import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

   const [message, setMessage] = useState("");

    useEffect(() => {
      const authMessage = localStorage.getItem("authMessage");
      if (authMessage) {
        setMessage(authMessage);
        localStorage.removeItem("authMessage"); // Remove after displaying
      }
    }, []);

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Basic validation
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        new URLSearchParams({ email, password }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      console.log("API Response: ", response.data.token); // Debugging
      console.log("User Name Response: ", response.data.name);

      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        console.log("Token saved:", localStorage.getItem("token", "name")); // Check if saved

        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError("Token not found in response");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data);
      setError(err.response?.data?.message || "Invalid email or password");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="wrapper">
      <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
            <div className="col mx-auto">
              <div className="mb-4 text-center mt-5">
                <img src="assets/images/logo-img.png" width="180" alt="" />
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="border p-4 rounded">
                    <div className="text-center">
                      <h3 className="">Sign in</h3>

                      {error && <p style={{ color: "red" }}>{error}</p>}
                      {message && (
                        <div style={{ color: "red", marginBottom: "10px" }}>
                          {message} 
                        </div>
                      )}
                    </div>

                    <div className="form-body">
                      <form className="row g-3" onSubmit={handleLoginEvent}>
                        <div className="col-12">
                          <label
                            htmlFor="inputEmailAddress"
                            className="form-label"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="inputEmailAddress"
                            placeholder="Email Address"
                            required=""
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="inputChoosePassword"
                            className="form-label"
                          >
                            Enter Password
                          </label>
                          <div className="input-group" id="show_hide_password">
                            <input
                              type={passwordVisible ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control border-end-0"
                              id="inputChoosePassword"
                              placeholder="Enter Password"
                              required=""
                            />
                            <button
                              type="button"
                              className="input-group-text bg-transparent"
                              onClick={togglePasswordVisibility}
                            >
                              <i
                                className={
                                  passwordVisible ? "bx bx-show" : "bx bx-hide"
                                }
                              ></i>
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckChecked"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 text-end">
                          <a href="authentication-forgot-password.html">
                            Forgot Password?
                          </a>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                              <i className="bx bxs-lock-open"></i>Sign in
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
