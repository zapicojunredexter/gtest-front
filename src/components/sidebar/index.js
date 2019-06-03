import React from 'react';
import { Link } from "react-router-dom";
import "./styles.scss";
class Component extends React.PureComponent<> {
    render() {
        return (
            <div>
            <nav className="main-sidebar">
                src/components/sidebar/index.js
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/bookings">Bookings</Link>
                    </li>
                    <li>
                    <Link to="/drivers">Drivers</Link>
                    </li>
                    <li>
                    <Link to="/routes">Routes</Link>
                    </li>
                    <li>
                    <Link to="/trips">Trips</Link>
                    </li>
                    <li>
                    <Link to="/users">Users</Link>
                    </li>
                    <li>
                    <Link to="/vehicles">Vehicles</Link>
                    </li>
                </ul>
            </nav>
            </div>
        );
    }
}

export default Component;
