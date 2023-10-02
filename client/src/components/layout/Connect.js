import React, { Component } from "react";
import { Link } from "react-router-dom";

class Connect extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-12 text-center">
            <h1 className="text-uppercase display-3">
              {" "}
              Enter Server Node Key{" "}
            </h1>
            <h3>Enter server swift node to connect to the messaging node</h3>
            <div className="row mt-5">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control text-center"
                    id="server-node"
                  />
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
            <Link to="/dashboard">
              <button
                type="button"
                className="btn btn-success mt-3 pt-2 pd-2 pr-5 pl-5"
                style={{ fontSize: "25px" }}
              >
                Connect to swift Messaging
              </button>
            </Link>
            <h3 className="pt-5">Swift Messaging Network Sub Node V.2.0</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Connect;
