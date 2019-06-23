import React from 'react';
import "./styles.scss";
class Component extends React.PureComponent<> {
    render() {
        return (
            <header id="header" class="header">
                <div class="top-left">
                    <div class="navbar-header">
                        <a class="navbar-brand"><i class="material-icons">airport_shuttle</i></a>
                        <a class="navbar-brand hidden"><i class="material-icons">airport_shuttle</i></a>
                        <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
                    </div>
                </div>
                <div class="top-right">
                    <div class="header-menu">
                        <div class="header-left">
                            <div class="user-area dropdown float-right">
                                <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                admin@email.com
                                <i class="material-icons">arrow_drop_down</i>
                                
                                </a>
        
                                <div class="user-menu dropdown-menu">
                                    <a class="nav-link" href="#"><i class="fa fa -cog"></i>Settings</a>
        
                                    <a class="nav-link" onClick={this.props.logout}><i class="fa fa-power -off"></i>Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
        return (
            <div className="main-header">
                src/components/header/index.js
                <button onClick={this.props.logout}>LOGOUT</button>
            </div>
        );
    }
}

export default Component;
