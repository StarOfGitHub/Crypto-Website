import React, { Component } from "react";
import { Link } from "react-router-dom";

const imagePath = '/assets/landing.png';

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-7">
            <div className="d-flex justify-content-center">
              <img
                style={{ borderRadius: "10px", width: "100%"}}
                src={imagePath}
                alt="landing"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="container-fluid text-center" style={{ width: "80%" }}>
              <div className="row">
                <div className="col-sm-12">
                  <h1>
                    Crypto Exchange Website
                  </h1>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-12">
                  <Link to="/register" className="btn btn-large btn-dark hoverable">
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-large btn-light hoverable ml-5"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
