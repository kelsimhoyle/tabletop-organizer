import React from "react";
import GameForm from "../../../components/GameForm";

const Dashboard: React.FC<{}> = ()=> {
    return (
        <>
        <h1>Dashboard</h1>
        <div>
            <GameForm />
        </div>
        </>
    );
};

export default Dashboard;