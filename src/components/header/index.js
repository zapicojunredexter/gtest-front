import React from 'react';
import "./styles.scss";
class Component extends React.PureComponent<> {
    render() {
        return (
            <div className="main-header">
                src/components/header/index.js
                <button onClick={this.props.logout}>LOGOUT</button>
            </div>
        );
    }
}

export default Component;
