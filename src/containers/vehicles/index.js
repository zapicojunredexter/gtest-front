import React from 'react';
import { connect } from 'react-redux';
import VehicleService from '../../redux/vehicles/vehicle.service';
class Container extends React.PureComponent<> {
    state = {
        plateNumber: '',
        seats: [],
    }

    handleAddVehicle = () => {
        this.props.addVehicle(this.state);
    }
    render() {
        return (
            <div>
                src/containers/vehicles/index.js

                <br /><br /><br /><br /><br /><br />
                <input placeholder="plate number" value={this.state.plateNumber} onChange={event => this.setState({ plateNumber:event.target.value})} />
                <input placeholder="seats" value={this.state.seats} onChange={event => this.setState({ seats:event.target.value})} />
                <button onClick={this.handleAddVehicle}>ADD</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    fetchVehicles: () => dispatch(VehicleService.fetchVehicles()),
    addVehicle: params => dispatch(VehicleService.addVehicle(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
