import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import './index.css';

class Transfer extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-md-1 col-sm-12"></div>
          <div className="col-md-5 col-sm-8 text-left">
            <h1 className="text-white">Flash Funds App</h1>
          </div>
          <div className="col-md-5 col-sm-4">
            <div style={{ position: "relative" }}>
              <div
                style={{ position: "positive", top: "0px", left: "0px" }}
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
              </div>
              <button
                style={{ position: "positive", top: "0px", left: "0px" }}
                onClick={this.onLogout}
                className="btn btn-large btn-light hoverable font-weight-bold"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="col-md-1 col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="display-3 text-white">Transfer Confirmation</div>
            <h1>MT103 Cash Transfer Successfully Sent</h1>
            <div className="row">
              <div className="col-md-6 text-right">
                <div
                  style={{ borderRight: "2px solid rgba(255, 255, 255, 0.5)" }}
                >
                  <h3 className="mt-3 pr-3">Beneficiary Bank Name</h3>
                  <h3 className="pt-3 pr-3">Account Number</h3>
                  <h3 className="pt-3 pr-3">Account Name</h3>
                  <h3 className="pt-3 pr-3">Amount</h3>
                  <h3 className="pt-3 pr-3">Currency</h3>
                  <h3 className="pt-3 pr-3">Date</h3>
                  <h3 className="pt-3 pr-3">Time</h3>
                </div>
              </div>
              <div className="col-md-6 text-left">
                <h3 className="mt-3 pr-3">Zenith Bank Chana Limited</h3>
                <h3 className="pt-3 pr-3">Account Number</h3>
                <h3 className="pt-3 pr-3">Account Name</h3>
                <h3 className="pt-3 pr-3">Amount</h3>
                <h3 className="pt-3 pr-3">Currency</h3>
                <h3 className="pt-3 pr-3">Date</h3>
                <h3 className="pt-3 pr-3">Time</h3>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-3"></div>
              <div
                className="col-md-3 d-flex align-items-center justify-content-center print"
              >
                <i
                  className="fa fa-print pr-2"
                  style={{ fontSize: "40px" }}
                ></i>
                <span style={{ fontSize: "22px" }}>Print Swift Copy</span>
              </div>
              <div
                className="col-md-3 d-flex align-items-center justify-content-center print"
              >
                <i
                  className="fa fa-print pr-2"
                  style={{ fontSize: "40px" }}
                ></i>
                <span style={{ fontSize: "22px" }}>Export Swift Copy</span>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Transfer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Transfer);
