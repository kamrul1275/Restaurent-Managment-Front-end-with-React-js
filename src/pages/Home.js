import React from "react";

const Home = () => {
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

                    </div>
                    <div className="d-grid"></div>

                    <div className="form-body">
                      <form className="row g-3">
                        <div className="col-12">
                          <label for="inputEmailAddress" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmailAddress"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="col-12">
                          <label
                            for="inputChoosePassword"
                            className="form-label"
                          >
                            Enter Password
                          </label>
                          <div className="input-group" id="show_hide_password">
                            <input
                              type="password"
                              className="form-control border-end-0"
                              id="inputChoosePassword"
                              value="12345678"
                              placeholder="Enter Password"
                            />{" "}
                            <a
                              href=""
                              className="input-group-text bg-transparent"
                            >
                              <i className="bx bx-hide"></i>
                            </a>
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
                              for="flexSwitchCheckChecked"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 text-end">
                          {" "}
                          <a href="authentication-forgot-password.html">
                            Forgot Password ?
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

export default Home;
