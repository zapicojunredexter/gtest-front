import React from 'react';
import { connect } from 'react-redux';
import UserService from '../../redux/user/user.service';

class Container extends React.PureComponent<> {
    onPressLogin = () => {
        this.props.login('admin', 'admin');
    }
    render() {
        return (
            <div>
                src/containers/login/index.js
                <button onClick={this.onPressLogin}>LOGIN</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(UserService.login(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
