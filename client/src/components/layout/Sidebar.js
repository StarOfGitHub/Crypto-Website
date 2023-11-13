import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className='main pt-5'>
                    <div className='sidebar'>
                        <ul>
                            <Link to="/dashboard">
                                <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/db_nav_icon_1.png" alt="Icon Missing" /><span className='pl-4'>Dashboard</span></li>
                            </Link>
                                <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/db_nav_icon_5.png" alt="Icon Missing" /><span className='pl-4'>Invest History</span></li>
                            <Link to="/addfund">
                                <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/dashboard_acc_3.png" alt="Icon Missing" /><span className='pl-4'>Add Fund</span></li>
                            </Link>
                            <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/db_nav_icon_3.png" alt="Icon Missing" />v<span className='pl-4'>Fund History</span></li>
                            <Link to="/transfer">
                                <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/dashboard_3.png" alt="Icon Missing" /><span className='pl-4'>Transfer</span></li>
                            </Link>
                            <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/dashboard_1.png" alt="Icon Missing" /><span className='pl-4'>Transaction</span></li>
                            <Link to="/payout">
                                <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/refferal_3.png" alt="Icon Missing" /><span className='pl-4'>Payout</span></li>
                            </Link>
                            <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/feature_2.png" alt="Icon Missing" /><span className='pl-4'>Payout History</span></li>
                            <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/dashboard_acc_4.png" alt="Icon Missing" /><span className='pl-4'>My Referral</span></li>
                            <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/db_nav_icon_4.png" alt="Icon Missing" /><span className='pl-4'>Referral Bonus</span></li>
                            <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/feature_1.png" alt="Icon Missing" /><span className='pl-4'>Profile Settings</span></li>
                            <li className='d-flex align-items-center'><img src="https://sucuredcapitalfx.com/assets/themes/lightorange/images/icon/feature_3.png" alt="Icon Missing" /><span className='pl-4'>Support Ticket</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "#33286B",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

export default Navbar;
