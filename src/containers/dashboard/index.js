import React from 'react';
import { connect } from 'react-redux';

class Container extends React.PureComponent<> {
    render() {
        return (
            <div>
                src/containers/dashboard/index.js
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);