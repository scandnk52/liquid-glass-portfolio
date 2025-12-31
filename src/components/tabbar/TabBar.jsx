import "./tabbar.css";
import TabBarButton from "./TabBarButton.jsx";

export default function TabBar() {
    return (
        <nav className="tab-bar glass">
            <TabBarButton name="Home" path="/" icon="fas fa-house" />
            <TabBarButton name="Settings" path="/settings" icon="fas fa-gear" />
        </nav>
    )
}