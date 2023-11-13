import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../App.css';
const CardImage = "/assets/shape-img-2.png";

class Addfund extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-3 col-md-3'>
              <Sidebar />
            </div>
            <div className='col-sm-9 col-md-9'>
              <div className='card-theme'>
                <div className='cards'>
                  <div className='payout-card'>
                    <div className='wallet'>
                      <div className='second-wallet'>
                        <div className='row'>
                          <div className='wallet-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/gateway/61d16f5313ee41641115475.jpg" alt="Icon Missing" />
                          </div>
                          <button type='button' class="btn btn-primary paybutton">PAYOUT NOW</button>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='cards'>
                  <div className='payout-card'>
                    <div className='wallet'>
                      <div className='second-wallet'>
                        <div className='row'>
                          <div className='wallet-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/gateway/644fec0fbfde21682959375.png" alt="Icon Missing" />
                          </div>
                          <button type='button' class="btn btn-primary paybutton">PAYOUT NOW</button>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='cards'>
                  <div className='payout-card'>
                    <div className='wallet'>
                      <div className='second-wallet'>
                        <div className='row'>
                          <div className='wallet-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/gateway/64554769cb5811683310441.png" alt="Icon Missing" />
                          </div>
                          <button type='button' class="btn btn-primary paybutton">PAYOUT NOW</button>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='cards'>
                  <div className='payout-card'>
                    <div className='wallet'>
                      <div className='second-wallet'>
                        <div className='row'>
                          <div className='wallet-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/gateway/64554ad4b8e621683311316.jpg" alt="Icon Missing" />
                          </div>
                          <button type='button' class="btn btn-primary paybutton">PAYOUT NOW</button>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='cards'>
                  <div className='payout-card'>
                    <div className='wallet'>
                      <div className='second-wallet'>
                        <div className='row'>
                          <div className='wallet-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/gateway/64554cd9ca5171683311833.png" alt="Icon Missing" />
                          </div>
                          <button type='button' class="btn btn-primary paybutton">PAYOUT NOW</button>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='cards'>
                  <div className='payout-card'>
                    <div className='wallet'>
                      <div className='second-wallet'>
                        <div className='row'>
                          <div className='wallet-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/gateway/64562c9db11441683369117.jpg" alt="Icon Missing" />
                          </div>
                          <button type='button' class="btn btn-primary paybutton">PAYOUT NOW</button>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='cards'>
                  <div className='payout-card'>
                    <div className='wallet'>
                      <div className='second-wallet'>
                        <div className='row'>
                          <div className='wallet-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/gateway/64562f251aa771683369765.jpg" alt="Icon Missing" />
                          </div>
                          <button type='button' class="btn btn-primary paybutton">PAYOUT NOW</button>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
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

const HeaderStyle = {
  background: `url(${CardImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

export default Addfund;
