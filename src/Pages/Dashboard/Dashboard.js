import React, { Component } from "react";
import "./dashboard.scss";
import DashboardLayout from "../../Components/DashboardLayout";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <DashboardLayout>
        <main>Dashboard contents</main>
      </DashboardLayout>
    );
  }
}

export default Dashboard;
