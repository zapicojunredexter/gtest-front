import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from '../src/containers/dashboard';
import Login from '../src/containers/login';
import Bookings from '../src/containers/bookings';
import Drivers from '../src/containers/drivers';
import Routes from '../src/containers/routes';
import Trips from '../src/containers/trips';
import Commuters from '../src/containers/commuters';
import Vehicles from '../src/containers/vehicles';

import Sidebar from './components/sidebar';
import Header from './components/header';

import UserService from './redux/user/user.service';

import './App.css';

class App extends React.PureComponent<> {
    renderMain = () => {
        return (
            <>
            <Header />
            <div style={{display: 'flex',flexDirection: 'row'}}>
                <Sidebar />
                <Route path="/bookings" exact component={Bookings} />
                <Route path="/drivers" exact component={Drivers} />
                <Route path="/routes" exact component={Routes} />
                <Route path="/trips" exact component={Trips} />
                <Route path="/commuters" exact component={Commuters} />
                <Route path="/vehicles" exact component={Vehicles} />
            </div>
            </>
        );
    }

    protectedRoute = props => {
        if (this.props.isLoggedIn) {
            return (
                <Switch>
                    <div>
                        <Header logout={this.props.logout} />
                        <div style={{display: 'flex',flexDirection: 'row'}}>
                            <Sidebar />
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/bookings" exact component={Bookings} />
                            <Route path="/drivers" exact component={Drivers} />
                            <Route path="/routes" exact component={Routes} />
                            <Route path="/trips" exact component={Trips} />
                            <Route path="/commuters" exact component={Commuters} />
                            <Route path="/vehicles" exact component={Vehicles} />
                        </div>
                    </div>
                </Switch>
            );
        }
        return (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { from: props.location },
                }}
            />
        );
    };

    loginRoute = () => {
        if (this.props.isLoggedIn === false) {
            return <Route path="/login" component={Login} />;
        }

        return (
            <Redirect
                to={{
                    pathname: '/',
                }}
            />
        );
    };
    render(){
        return (
            <Switch>
                <Route path="/login" render={this.loginRoute} />
                <Route path="/" render={this.protectedRoute} />
            </Switch>
        );
    }
}


const mapStateToProps = state => ({
    isLoggedIn: state.userStore.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(UserService.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
