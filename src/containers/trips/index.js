import React from 'react';
import { connect } from 'react-redux';

import TripsService from '../../redux/trips/trip.service';

class Container extends React.PureComponent<> {
    state = {
        tripDate: null,
        tripTime: null,
        driver: null,
        route: null,
        vehicle: null,
    };

    handleAddTrip = () => {
        this.props.addTrip(this.state);
    }
    render() {
        return (
            <div>
                src/containers/trips/index.js


                <br /><br /><br /><br /><br /><br />
                <input placeholder="" type="date" value={this.state.tripDate} onChange={event => this.setState({ tripDate:event.target.value})} />
                <input placeholder="" type="time" value={this.state.tripTime} onChange={event => this.setState({ tripTime:event.target.value})} />
                <input placeholder="driver" type="text" value={this.state.driver} onChange={event => this.setState({ driver:event.target.value})} />
                <input placeholder="route" type="text" value={this.state.route} onChange={event => this.setState({ route:event.target.value})} />
                <input placeholder="vehicle" type="text" value={this.state.vehicle} onChange={event => this.setState({ vehicle:event.target.value})} />
                <button onClick={this.handleAddTrip}>ADDD</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(TripsService.fetchTrips()),
    addTrip: params => dispatch(TripsService.addTrip(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
