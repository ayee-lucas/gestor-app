import React from "react";
import Cards from "./Cards";
import DashboardTable from "./DashboardTable";

const Dashboard = () => {
    return(
        <div>
            <div
              className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-indigo-700 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
            >   
              <div className="flex items-center">
                <span>RoomFly Stadistics</span>
              </div>
            </div>
            <Cards/>
            <DashboardTable/>

        </div>
    );
}

export default Dashboard;