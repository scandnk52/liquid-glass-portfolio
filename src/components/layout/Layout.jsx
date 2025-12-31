import TabBar from "../tabbar/TabBar.jsx";
import { Outlet } from "react-router-dom";

import "./layout.css";

export default function Layout() {
    return (
        <>
            <div className="wallpaper"></div>

            <div className="view-container">
                <Outlet />
            </div>

            <div className="tab-bar-container">
                <TabBar />
            </div>
        </>
    )
}