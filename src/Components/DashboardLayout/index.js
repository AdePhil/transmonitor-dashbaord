/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./dashbaordlayout.scss";
const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__nav">
        <header className="dashboard__header">
          <div className="dashboard__header-container">
            <p className="dashboard__logo">TransMonitor</p>
            <nav className="nav">
              <a href="#" className="nav__item">
                Support
              </a>
              <a href="#" className="nav__item">
                FAQ
              </a>
              <a href="#" className="nav__item notification">
                <img src="/bell.svg" alt="notification" />
                <div className="notification-count">20</div>
              </a>
              <div className="user nav__item">
                <div className="user__text">
                  <p className="user__greeting">Hello</p>
                  <p className="user__name">Oluwaleke Ojo</p>
                </div>
                <img src="/user.png" className="user__img" alt="user avatar" />
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DashboardLayout;
