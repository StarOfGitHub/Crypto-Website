import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from './Sidebar';

class Dashboard extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <Header />
        <div className="main">
          <div className="row">
            <div className="col-md-3"><Sidebar /></div>
            <div className="col-md-9" style={{marginTop: "50px"}}>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='balance-card'>
                    <div className='balance'>
                      <div className='second-balance'>
                        <div className='row'>
                          <div className='col-md-3 balance-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/dashboard_1.png" alt="Icon Missing" />
                          </div>
                          <div className='col-md-9 balance-text'>
                            <div className='balnace-text1'>Main Balance</div>
                            <div className='balnace-text2'>$50</div>
                          </div>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-1.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                <div className='balance-card'>
                  <div className='balance'>
                    <div className='second-balance'>
                      <div className='row'>
                        <div className='col-md-3 balance-pic'>
                          <img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/dashboard_acc_3.png" alt="Icon Missing" />
                        </div>
                        <div className='col-md-9 balance-text'>
                          <div className='balnace-text1'>Interest Balance</div>
                          <div className='balnace-text2'>$0</div>
                        </div>
                      </div>
                    </div>
                    <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-1.png' alt='ba' />
                  </div>
                </div>
                </div>
                <div className='col-md-3'>
                  <div className='balance-card'>
                    <div className='balance'>
                      <div className='second-balance'>
                        <div className='row'>
                          <div className='col-md-3 balance-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/dashboard_3.png" alt="Icon Missing" />
                          </div>
                          <div className='col-md-9 balance-text'>
                            <div className='balnace-text1'>Total Deposit</div>
                            <div className='balnace-text2'>$0</div>
                          </div>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-1.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='balance-card'>
                    <div className='balance'>
                      <div className='second-balance'>
                        <div className='row'>
                          <div className='col-md-3 balance-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/dashboard_4.png" alt="Icon Missing" />
                          </div>
                          <div className='col-md-9 balance-text'>
                            <div className='balnace-text1'>Total Earn</div>
                            <div className='balnace-text2'>$0</div>
                          </div>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-1.png' alt='ba' />
                    </div>
                  </div>
                </div>
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
