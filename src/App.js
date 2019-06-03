import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { simpleAction } from './reducers/user/user.action';
import './App.css';

class App extends React.PureComponent<> {
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
