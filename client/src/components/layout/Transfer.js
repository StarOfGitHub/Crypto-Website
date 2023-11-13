import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../App.css';

class Transfer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-3 col-md-3'>
              <Sidebar />
            </div>
            <div className='col-sm-9 col-md-9 mainbox'>
              <div className='inputboxs'>
                <form action="/action_page.php">
                  <div class="form-group">
                    <label for="usr">Receiver Email Address</label>
                    <input type="text" class="form-control" placeholder="Receiver Email Address" id="usr" name="username" />
                  </div>
                  <div class="form-group">
                    <label for="usr">Amount</label>
                    <input type="text" class="form-control" id="usr" placeholder="Enter Amount" name="username" />
                  </div>
                  <div class="form-group">
                    <label>Select Wallet</label>
                    <select name="wallet_type" id="wallet_type" class="form-control form-control-lg" placeholder="Main balance">
                      <option value="balance">Main balance</option>
                      <option value="interest_balance">Interest Balance</option>
                    </select>
                    <br />
                  </div>
                  <div class="form-group">
                    <label for="pwd">Enter Password</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Your Password" name="password" />
                  </div>
                  <button type="submit" class="btn btn-primary submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Transfer;
