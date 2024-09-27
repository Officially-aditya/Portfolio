import React from "react";

import { Link } from "react-router-dom";
import './styles.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav>
                <ul className="sidebar-links">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/projects">Projects</Link></li>
                    <li><Link to = "/skills">Skills</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;