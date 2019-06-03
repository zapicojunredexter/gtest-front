import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../src/containers/login';
import Bookings from '../src/containers/bookings';
import Drivers from '../src/containers/drivers';
import Routes from '../src/containers/routes';
import Trips from '../src/containers/trips';
import Users from '../src/containers/users';
import Vehicles from '../src/containers/vehicles';

import Sidebar from './components/sidebar';

import logo from './logo.svg';
import { simpleAction } from './reducers/user/user.action';
import './App.css';

class App extends React.PureComponent<> {
    render(){

    return (
        <Router>
            <div style={{display: 'flex',flexDirection: 'row'}}>
                <Sidebar />
                <Route path="/login" exact component={Login} />
                <Route path="/bookings" exact component={Bookings} />
                <Route path="/drivers" exact component={Drivers} />
                <Route path="/routes" exact component={Routes} />
                <Route path="/trips" exact component={Trips} />
                <Route path="/users" exact component={Users} />
                <Route path="/vehicles" exact component={Vehicles} />
            </div>
        </Router>
    );
    }
    /*
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                <button onClick={() => this.props.testDispatch()}>pres me</button>
            </header>
            </div>
        );
    }
    */
}


const mapStateToProps = state => ({
    test: state.userStore,
  });

const mapDispatchToProps = dispatch => ({
  testDispatch: () => dispatch(simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
