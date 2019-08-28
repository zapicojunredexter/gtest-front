import React from 'react';
import { connect } from 'react-redux';
import { Chart } from "react-charts";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import './styles.scss';


class Container extends React.PureComponent<> {
    render() {
        return (
            <div>
                sales
            </div>
        );
    }
}


const mapStateToProps = state => ({
    routes: state.routeStore.routes,
    bookings: state.bookingStore.bookings,
    vehicles: state.vehicleStore.vehicles,
    drivers: state.driverStore.drivers,
    commuters: state.commuterStore.commuters,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
