import React from 'react';
import { Link } from "react-router-dom";
import "./styles.scss";
class Component extends React.PureComponent<> {
    render() {
        return (
            <aside id="left-panel" class="left-panel">
                <nav class="navbar navbar-expand-sm navbar-default">
                    <div id="main-menu" class="main-menu collapse navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li class={this.props.currentPath === '/' ? 'active' : ''}>
                                <Link to="/">
                                    <i class="menu-icon fa fa-laptop"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li class={this.props.currentPath === '/vehicles' ? 'active' : ''}>
                                <Link to="/vehicles">
                                    Vehicles
                                    <i class="menu-icon material-icons">directions_bus</i>
                                </Link>
                            </li>
                            <li class={this.props.currentPath === '/trips' ? 'active' : ''}>
                                <Link to="/trips">
                                    Trips<i class="menu-icon material-icons">location_on</i>
                                </Link>
                            </li>
                            <li class={this.props.currentPath === '/bookings' ? 'active' : ''}>
                                <Link to="/bookings">
                                    Bookings<i class="menu-icon material-icons">account_balance_wallet</i>
                                </Link>
                            </li>
                            <li class={this.props.currentPath === '/routes' ? 'active' : ''}>
                                <Link to="/routes">
                                    Routes<i class="menu-icon material-icons">map</i>
                                </Link>
                            </li>
                            <li class={this.props.currentPath === '/drivers' ? 'active' : ''}>
                                <Link to="/drivers">
                                    Drivers<i class="menu-icon material-icons">airline_seat_recline_normal</i>
                                </Link>
                            </li>
                            <li class={this.props.currentPath === '/commuters' ? 'active' : ''}>
                                <Link to="/commuters">
                                    Commuters<i class="menu-icon material-icons">supervisor_account</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
        );

        return (
            <div>
            <nav className="main-sidebar">
                src/components/sidebar/index.js
                <ul>
                    <li>
                    <Link to="/">Home</Link>
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
                    <Link to="/commuters">Commuters</Link>
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
