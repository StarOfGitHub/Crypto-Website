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
        <div className="row pt-4">
          <div className="col-md-3">
            <div className="form-group">
              <label for="f2-sender">F20: Senders Reffrence</label>
              <input
                type="text"
                style={{ backgroundColor: "rgba(100, 100, 100, 0.8)" }}
                className="form-control"
                id="f2-sender"
                placeholder="XXXXXXXXXXXXXXXXXXXXX"
                disabled
              />
            </div>
            <div className="form-group">
              <label for="f2-cred">F23B: CRED</label>
              <input
                type="text"
                style={{ backgroundColor: "rgba(100, 100, 100, 0.8)" }}
                className="form-control"
                id="f2-cred"
                placeholder="XXXCREDXX"
                disabled
              />
            </div>
            <div>
              <h6>- F32A: Date, Currency, Amount</h6>
              <hr />
              <div className="form-group">
                <label for="f2-cred">
                  Date <i className="fa fa-calendar"></i>
                </label>
                <input type="date" className="form-control" id="f2-cred" />
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="form-group">
                    <label for="f2-cred">Amount</label>
                    <input type="text" className="form-control" id="f2-cred" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label for="sel1">Currency: </label>
                    <select class="form-control" id="sel1" name="sellist1">
                      <option>USD</option>
                      <option>EURO</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6>- F32B: Currency/Instructured Amount</h6>
              <hr />
              <div className="form-group">
                <label for="f2-cred">Amount in Words</label>
                <input type="text" className="form-control" id="f2-cred" />
              </div>
              <div className="row">
                <div className="col-md-7">
                  <div className="form-group">
                    <label for="f2-cred">Amount</label>
                    <input type="text" className="form-control" id="f2-cred" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label for="sel1">Currency: </label>
                    <select class="form-control" id="sel1" name="sellist1">
                      <option>USD</option>
                      <option>EURO</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h6>F57A: Account with institution-BIC/Coresponding bank</h6>
            <hr />
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label for="f2-sender">Swift Code</label>
                  <input type="text" className="form-control" id="f2-sender" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="form-group">
                  <label for="f2-sender">Account Number</label>
                  <input type="text" className="form-control" id="f2-sender" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label for="f2-sender">Account Name</label>
                  <input type="text" className="form-control" id="f2-sender" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="form-group">
                  <label for="f2-sender">Bank Name</label>
                  <input type="text" className="form-control" id="f2-sender" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="f2-sender">Address</label>
              <input type="text" className="form-control" id="f2-sender" />
            </div>
            <h6>F70: Rmittance information / Purpose</h6>
            <hr />
            <div class="form-group">
              <textarea class="form-control" rows="3" id="comment"></textarea>
            </div>
            <h6>F7aA: Details of charges</h6>
            <hr />
            <div className="form-group">
              <input
                type="text"
                style={{ backgroundColor: "rgba(100, 100, 100, 0.8)" }}
                className="form-control"
                id="f2-sender"
                placeholder="OUR"
                disabled
              />
            </div>
            <h6>CHK: FILLED</h6>
            <h6>PKI Signature: FILLED</h6>
          </div>
          <div className="col-md-5">
            <h6>F59A: Beneficary INV Customer/ Name and address</h6>
            <hr />
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label for="f2-sender">Swift Code</label>
                  <input type="text" className="form-control" id="f2-sender" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="form-group">
                  <label for="f2-sender">Account Number</label>
                  <input type="text" className="form-control" id="f2-sender" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="form-group">
                  <label for="f2-sender">Account Name</label>
                  <input type="text" className="form-control" id="f2-sender" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="form-group">
                  <label for="f2-sender">Bank Name</label>
                  <input type="text" className="form-control" id="f2-sender" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="f2-sender">Address</label>
              <input type="text" className="form-control" id="f2-sender" />
            </div>
            <div className="form-group">
              <label for="sel1">Sender Server: </label>
              <select class="form-control" id="sel1" name="sellist1">
                <option>CITI Germany Server</option>
                <option>DB Germany Server</option>
                <option>HSBC UK Server</option>
                <option>RBC Canada Server</option>
              </select>
            </div>
            <div className="form-group">
              <label for="sel1">Select Instrument: </label>
              <select class="form-control" id="sel1" name="sellist1">
                <option>MT103 CASH TRANSFER</option>
                <option>MT103/202 CREDIT TRANSFER</option>
                <option>MT103 CPI AUTOMATIC</option>
                <option>MT103 VIA IPIP/IPIP</option>
                <option>MT700 DLC</option>
                <option>MT199</option>
                <option>MT799</option>
                <option>MT760</option>
              </select>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <Link to="/transfer">
                  <button className="btn btn-danger pr-4 pl-4 pt-2 pb-2">
                    <i className="fa fa-book"></i>
                    <span>TRANSFER</span>
                  </button>
                </Link>
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
