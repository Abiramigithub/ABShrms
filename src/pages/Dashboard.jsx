import React, { useState } from 'react';
import './Dashboard.css'; // Import your CSS file for styling
import MySalary from './MySalary';

const Dashboard = () => {
    const menus = ['MYSALARY', 'PAYSLIPS', 'INCOMETAX', 'COMPONENTCLAIMS'];
    const [activeMenu, setActiveMenu] = useState(menus[0]);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const menuComponents = {
        MYSALARY: <MySalary />,
        PAYSLIPS: <div style={{ fontFamily: "poppins" }}>Pay slips</div>,
        INCOMETAX: <div style={{ fontFamily: "poppins" }}>Income tax</div>,
        COMPONENTCLAIMS: <div style={{ fontFamily: "poppins" }}>Component Claims</div>,
    };

    return (
        <div className="App">
            <div className="menu-container">
                {menus.map((menu) => (
                    <div
                        key={menu}
                        className={`menu-item ${menu === activeMenu ? 'active-menu' : ''}`}
                        onClick={() => handleMenuClick(menu)}
                    >
                        {menu}
                    </div>
                ))}
            </div>

            <div className="content">
                {/* Render the component based on the active menu */}
                {menuComponents[activeMenu]}
            </div>
        </div>
    );
};

export default Dashboard;
