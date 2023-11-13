import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../App.css';
const CardImage = "/assets/shape-img-2.png";

class Withdraw extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-3 col-md-3'>
              <Sidebar />
            </div>
            <div className='col-sm-9 col-md-9 welcome-text'>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='payout-card1'>
                    <div className='wallet1'>
                      <div className='second-wallet1'>
                        <div className='row'>
                          <div className='wallet-pic1'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/withdraw/606418e821ad01617172712.jpg" alt="Icon Missing" />
                          </div>
                          <div className='textbox'>
                            <div className='texts'>
                              <h6 className='textstyles'>Request Amount:</h6>
                              <h6 className='textstyles'>Charge Amount:</h6>
                              <h6 className='textstyles'>Total Payable:</h6>
                              <h6 className='textstyles'>Available Balance:</h6>
                            </div>
                            <div className='prices'>
                              <h6 className='price1'>20$</h6>
                              <h6 className='price2'>10$</h6>
                              <h6 className='price2'>30$</h6>
                              <h6 className='price1'>20$</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-7'>
                  <div className='payout-card3'>
                    <div className='wallet3'>
                      <div className='second-wallet3'>
                        <div className='row'>
                          <div className='wallet4'>
                            <h5 className='addtitle'>Additional Information To Withdraw Confirm</h5>
                            <div class="addwithdraw">
                              <h6>Email</h6>
                              <input type="text" class="form-control withdrawinput" id="usr" name="username" />
                            </div>
                            <div class="addwithdraw">
                              <h6>NID Number</h6>
                              <input type="text" class="form-control withdrawinput" id="usr" name="username" />
                            </div>
                            <div class="addwithdraw">
                              <h6>Paaport Number</h6>
                              <input type="text" class="form-control withdrawinput" id="usr" name="username" />
                            </div>
                            <button type="button" class="btn btn-outline-primary confirm">Confirm Now</button>
                          </div>

                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='col-md-1'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const HeaderStyle = {
  background: `url(${CardImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

export default Withdraw;
