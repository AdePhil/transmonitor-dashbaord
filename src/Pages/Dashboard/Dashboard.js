import React, { Component } from "react";
import "./dashboard.scss";
import Card from "../../Components/Card/index";
import DashboardLayout from "../../Components/DashboardLayout";
import { Tooltip, AreaChart, Area, ResponsiveContainer } from "recharts";
import chartData from "./chartdata";
import payments from "./tabledata";
import Table from "../../Components/Table/index";
class Dashboard extends Component {
  state = {
    payments,
    chartData
  };
  render() {
    const { payments, chartData } = this.state;
    return (
      <DashboardLayout>
        <>
          <div className="dashboard__cards">
            <Card label={"Daily Transaction Volume"} value={"2,342"} />
            <Card label={"Daily Transaction Value"} value={"₦4,000,000"} />
            <Card label={"Total Transaction Volume"} value={"452,000"} />
            <Card label={"Total Transaction Value"} value={"₦4,000,000"} />
          </div>
          <div className="dashboard__stat">
            <div className="dashboard__stat-graph">
              <div className="dashboard__stat-graph-details">
                <h3>Today: 5, Aug 2018</h3>
              </div>
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="rgba(2, 148, 255, 0.45)"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="rgba(255, 255, 255, 0.0001)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="rgba(2, 148, 255, 0.45)"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="rgba(2, 148, 255, 0.45)"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="dashboard__stat-info orders">
              <h4>Orders</h4>
              <div className="progress" />
              <p>
                Pending Orders: <span className="bold text-yellow">20</span>
              </p>
              <p>
                Reconcilled Orders: <span className="bold text-blue">80</span>
              </p>
              <p>
                Total Orders: <span className="bold text-green">100</span>
              </p>
            </div>
            <div className="dashboard__stat-info payments">
              <h4>Payments</h4>
              <div className="progress" />
              <p>
                Pending Payments: <span className="bold text-yellow">20</span>
              </p>
              <p>
                Reconcilled Payments: <span className="bold text-blue">80</span>
              </p>
              <p>
                Total Payments: <span className="bold text-green">100</span>
              </p>
            </div>
          </div>
          <div className="dashboard__payment">
            <h2 className="dashboard__payment-heading">Payments</h2>
            <Table tableData={payments} />
          </div>
        </>
      </DashboardLayout>
    );
  }
}

export default Dashboard;
