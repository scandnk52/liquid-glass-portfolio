import { useRef } from "react";
import {getTheme, setTheme} from "../../utils/theme.js";
import "./settings.css";

export default function Settings() {
    const isDark = getTheme() === "dark";
    const inputRef = useRef(null);

    function handleChange(e) {
        const checked = e.target.checked;
        setTheme(checked ? "dark" : "light");
      }

    return (
        <div className="settings-view">
            <div className="settings-header-section">
                <h2 className="settings-title">Settings</h2>
                <span className="settings-subtitle">v1.0.0</span>
            </div>

            <div className="settings-group glass">
                <div className="settings-item">
                    <div className="item-left">
                        <div className="icon-box bg-purple"><i className="fas fa-moon"></i></div>
                        <span>Dark Mode</span>
                    </div>
                    <label className="ios-switch">
                         <input ref={inputRef} type="checkbox" defaultChecked={isDark} onChange={handleChange}/>
                        <span className="slider"></span>
                    </label>
                </div>
            </div>

           <div className="settings-group glass">
                <a href="https://github.com/scandnk52/liquid-glass-portfolio" target="_blank" rel="noopener noreferrer" className="settings-item settings-link">
                    <div className="item-left">
                        <div className="icon-box bg-orange">
                            <i className="fa-brands fa-github"></i>
                        </div>
                        <span>Source Code</span>
                    </div>
                    <div className="item-right">
                        <span className="version-info">View on GitHub</span>
                        <i className="fas fa-chevron-right chevron"></i>
                    </div>
                </a>
            </div>
        </div>
    );
}