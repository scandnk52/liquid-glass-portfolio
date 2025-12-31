import {NavLink} from "react-router-dom";

export default function TabBarButton({ name, path, icon }) {
    return (
        <NavLink to={path} className={({ isActive }) => `tab-bar-item ${isActive ? 'glass-button' : ''}`}>
          <i className={`tab-bar-item-icon ${icon}`}></i>
          <span className="tab-bar-item-label">{name}</span>
        </NavLink>
    )
}