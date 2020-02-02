import React, { Component } from "react";
import "./dashboard.scss";
import Card from "../../Components/Card/index";
import DashboardLayout from "../../Components/DashboardLayout";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <DashboardLayout>
        <>
          <div className="dashboard__cards">
            <Card label={"Daily Transaction Volume"} value={"2,342"} />
            <Card label={"Daily Transaction Value"} value={"₦4,000,000"} />
            <Card label={"Total Transaction Volume"} value={"452,000"} />
            <Card label={"Total Transaction Value"} value={"₦4,000,000"} />
          </div>
        </>
      </DashboardLayout>
    );
  }
}

export default Dashboard;
