import React from "react";
import "./ClientDashboardOverview.css";

function ClientDashboardOverview() {
  console.log("ClientDashboardOverview: Rendering");
  return (
    <div className="client-overview">
      <h2>Client Dashboard - Overview</h2>
      <p>Welcome to your HealthCop dashboard. View your health summary and recent activities here.</p>
    </div>
  );
}

export default ClientDashboardOverview;