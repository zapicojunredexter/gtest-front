import React from 'react';
import { connect } from 'react-redux';

import TripsService from '../../redux/trips/trip.service';
import { getTripTableData } from '../../redux/trips/trip.selector';

import Table from '../../components/tables/Basic';

import './styles.scss';

const columns = [
    {
        Header: 'Departure Date',
        accessor: 'test',
    },
    {
        Header: 'Departure Time',
        accessor: 'test1',
    },
    {
        Header: 'Trip Driver',
        accessor: 'test2',
    },
    {
        Header: 'Trip Route',
        accessor: 'test3',
    },
    {
        Header: 'Vehicle',
        accessor: 'test4',
    },
    {
        Header: 'Price',
        accessor: 'test5',
    },
];

class Container extends React.PureComponent<> {
    state = {
        tripDate: null,
        tripTime: null,
        driver: null,
        route: null,
        vehicle: null,
        price: null,
    };

    componentDidMount(){
        // this.props.fetchTrips();
    }

    handleAddTrip = () => {
        this.props.addTrip(this.state)
            .then(this.props.fetchTrips)
            .catch(err => alert(err.message));
    }
    render() {
        return (
            <div className="trips__container">
                src/containers/trips/index.js


                <br /><br /><br /><br /><br /><br />
                <input placeholder="" type="date" value={this.state.tripDate} onChange={event => this.setState({ tripDate:event.target.value})} />
                <input placeholder="" type="time" value={this.state.tripTime} onChange={event => this.setState({ tripTime:event.target.value})} />
                drivers<select onChange={event => this.setState({ driver:event.target.value})}>
                    <option>-</option>
                    {this.props.drivers.map(driver => <option selected={this.state.driver === driver.Id} value={driver.Id}>{driver.FirstName}</option>)}
                </select>
                routes<select onChange={event => this.setState({ route: event.target.value})}>
                    <option>-</option>
                    {this.props.routes.map(route => <option selected={this.state.route === route.Id} value={route.Id}>{route.Route}</option>)}
                </select>
                vehicle<select onChange={event => this.setState({ vehicle: event.target.value})}>
                    <option>-</option>
                    {this.props.vehicles.map(vehicle => <option selected={this.state.vehicle === vehicle.Id} value={vehicle.Id}>{vehicle.PlateNumber}</option>)}
                </select>
                <input placeholder="price" type="text" value={this.state.price} onChange={event => this.setState({ price:event.target.value})} />
                <button onClick={this.handleAddTrip}>ADD</button>

                <Table
                    data={this.props.tableData}
                    columns={columns}
                    loading={this.props.isFetching}
                />
                <ul>
                    {this.props.trips.map(data => <li>{JSON.stringify(data)}</li>)}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    tableData: getTripTableData(state),
    isFetching: state.tripStore.isFetching,
    trips: state.tripStore.trips,
    routes: state.routeStore.routes,
    drivers: state.driverStore.drivers,
    vehicles: state.vehicleStore.vehicles,
});

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(TripsService.fetchTrips()),
    addTrip: params => dispatch(TripsService.addTrip(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
