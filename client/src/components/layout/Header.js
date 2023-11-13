import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="container-fluid">
        <div className="row pt-4 head">
          <div className="col-md-7 col-sm-8 text-left mb-3">
            <h1 className="text-white">Crypto Exchange Website</h1>
          </div>
          <div className="col-md-5 col-sm-4">
            <div style={{ position: "relative", marginTop: "7px"}}>
              <div
                style={{ position: "positive", top: "0px", left: "0px"}}
                className="d-flex align-items-center justify-content-end"
                data-toggle="collapse"
              >
                <i
                  className="fa fa-user"
                  style={{ fontSize: "30px", cursor: "pointer" }}
                ></i>
                <span style={{ fontSize: "20px", cursor: "pointer" }}>
                  {user.name}
                </span>
                <button
                  style={{ position: "positive", top: "0px", left: "0px" }}
                  onClick={this.onLogout}
                  className="btn btn-large btn-light hoverable font-weight-bold ml-5"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
