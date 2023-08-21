import React from "react";
import RootLayout from "../components/Layouts/RootLayout";
import DashboardLayout from "../components/Layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <div>
      <h1>This is a dashboard page</h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
