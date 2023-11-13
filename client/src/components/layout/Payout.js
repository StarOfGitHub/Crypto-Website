import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../App.css';
const CardImage = "/assets/shape-img-2.png";

class Payout extends Component {
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
                <div className='col-md-2'>
                  <div className='payout-card'>
                    <div className='wallet'>
                      <div className='second-wallet'>
                        <div className='row'>
                          <div className='wallet-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/withdraw/606418e821ad01617172712.jpg" alt="Icon Missing" />
                          </div>
                          <button type='button' className="btn btn-primary paybutton" data-toggle="modal" data-target="#myModal">PAYOUT NOW</button>
                          <div className="modal" id="myModal">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                  <h3 className="modal-title">Payout By Wire Transfer</h3>
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div className="modal-body">
                                  <h6>Transaction Limit: 20-20000$ </h6>
                                  <h6>Charge: 10$ </h6>
                                  <div className="container mt-4">
                                    <div className="form-group">
                                      <label htmlFor="sel1">Select Wallet</label>
                                      <select className="form-control" id="sel1" name="sellist1">
                                        <option>Deposit Balance - $50</option>
                                        <option>Interest Balance - $0</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="container mt-4">
                                    <h6 className='usdtext'>Amount</h6>
                                    <div className="input-group">
                                      <input type="text" className="form-control" />
                                      <div className="input-group-append">
                                        <button className="btn btn-success" type="submit">USD</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- Modal footer --> */}
                                <div className="modal-footer">
                                  {/* <Link to="/withdraw">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Next</button>
                                  </Link> */}
                                  <a href="/withdraw"><button type="button" className="btn btn-danger" data-dismiss="modal">Next</button></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img src='https://sucuredcapitalfx.com/assets/themes/lightorange/images/shapes/shape-img-2.png' alt='ba' />
                    </div>
                  </div>
                </div>
                <div className='col-md-2'>
                  <div className='payout-card'>
                    <div className='wallet'>
                      <div className='second-wallet'>
                        <div className='row'>
                          <div className='wallet-pic'>
                            <img src="https://sucuredcapitalfx.com/assets/uploads/withdraw/6456058fa9fc81683359119.jpg" alt="Icon Missing" />
                          </div>
                          <button type='button' className="btn btn-primary paybutton" data-toggle="modal" data-target="#myModal">PAYOUT NOW</button>
                          <div className="modal" id="myModal">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                  <h3 className="modal-title">Payout By Cryptocurrency</h3>
                                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                {/* <!-- Modal body --> */}
                                <div className="modal-body">
                                  <h6>Transaction Limit: 20-20000$ </h6>
                                  <h6>Charge: 10$ </h6>
                                  <div className="container" style={{ margin: 0 }}>
                                    <div className="form-group">
                                      <label htmlFor="sel1">Select Wallet</label>
                                      <select className="form-control" id="sel1" name="sellist1">
                                        <option>Deposit Balance - $50</option>
                                        <option>Interest Balance - $0</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="container mt-4">
                                    <h6 className='usdtext'>Amount</h6>
                                    <div className="input-group">
                                      <input type="text" className="form-control" />
                                      <div className="input-group-append">
                                        <button className="btn btn-success" type="submit">USD</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- Modal footer --> */}
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-danger" data-dismiss="modal">Next</button>
                                </div>
                              </div>
                            </div>
                          </div>
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

export default Payout;
