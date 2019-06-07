import React from 'react';
import { connect } from 'react-redux';
import DriverService from '../../redux/drivers/driver.service';

class Container extends React.PureComponent<> {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        contactNumber: '',
        gender: 'male',
    }

    componentDidMount () {
        // this.props.fetchDrivers();
    }

    handleAddDriver = () => {
        this.props.addDriver(this.state)
            .then(this.props.fetchDrivers)
            .catch(err => alert(err.message));
    }
    render() {
        return (
            <div>
                src/containers/drivers/index.js

                <br /><br /><br /><br /><br /><br />
                <br /><input type="email" onChange={event => this.setState({ email: event.target.value})} placeholder="emal" value={this.state.email} type="email" />
                <br /><input onChange={event => this.setState({ password: event.target.value})} placeholder="password" value={this.state.password} type="text" />
                <br /><input onChange={event => this.setState({ firstName: event.target.value})} placeholder="firstname" value={this.state.firstName} type="text" />
                <br /><input onChange={event => this.setState({ lastName: event.target.value})} placeholder="lastname" value={this.state.lastName} type="text" />
                <br /><input onChange={event => this.setState({ birthDate: event.target.value})} placeholder="birthdate" value={this.state.birthDate} type="date" />
                <br /><input onChange={event => this.setState({ contactNumber: event.target.value})} placeholder="contact number" value={this.state.contactNumber} type="text" />
                <br /><input onChange={event => this.setState({ gender: event.target.value})} placeholder="" value={this.state.gender} type="text" />
                <br /><button onClick={this.handleAddDriver}>SUBMIT</button>

                <ul>
                    {this.props.drivers.map(data => <li>{JSON.stringify(data)}</li>)}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    drivers: state.driverStore.drivers,
});

const mapDispatchToProps = dispatch => ({
    fetchDrivers: () => dispatch(DriverService.fetchDrivers()),
    addDriver: params => dispatch(DriverService.addDriver(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
