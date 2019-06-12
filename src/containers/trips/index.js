import React from 'react';
import { connect } from 'react-redux';

import TripsService from '../../redux/trips/trip.service';
import { getTripTableData } from '../../redux/trips/trip.selector';

import Table from '../../components/tables/Basic';

import AddTripModal from './modals/AddTripModal';
import { showAlert } from '../../utils/alert';

import './styles.scss';

const columns = [
    {
        Header: '#',
        accessor: null,
        Cell: (data) => (
            <span>
                {data.viewIndex}
            </span>
        ),
        width: 50,
    },
    {
        Header: 'Departure Date',
        accessor: 'departDate',
    },
    {
        Header: 'Departure Time',
        accessor: 'departTime',
    },
    {
        Header: 'Trip Driver',
        accessor: 'driver',
    },
    {
        Header: 'Trip Route',
        accessor: 'route',
    },
    {
        Header: 'Vehicle',
        accessor: 'vehicle',
    },
    {
        Header: 'Price',
        accessor: 'price',
    },
    {
        Header: 'Bookings',
        accessor: 'totalBookings',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
];

class Container extends React.PureComponent<> {
    state = {
        isAddModalOpen: false,
    };

    componentDidMount(){
        // this.props.fetchTrips();
    }

    handleAddTrip = params => {
        this.props.addTrip(params)
            .then(() => {
                showAlert('SUCCESS', 'Added new Vehicle', 'success');
                this.setState({isAddModalOpen: false});
                this.props.fetchTrips();
            })
            .catch(err => showAlert('ERROR', err.message, 'error'));
    }
    render() {
        return (
            <div className="trips__container">
                <button onClick={() => this.setState({isAddModalOpen: true})}>ADD</button>
                <AddTripModal
                    isOpen={this.state.isAddModalOpen}
                    onClose={() => this.setState({isAddModalOpen: false})}
                    drivers={this.props.drivers}
                    routes={this.props.routes}
                    vehicles={this.props.vehicles}
                    onSubmit={this.handleAddTrip}
                />
                {/*
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
                */}
                <Table
                    data={this.props.tableData}
                    columns={columns}
                    loading={this.props.isFetching}
                />
                {/*
                <ul>
                    {this.props.trips.map(data => <li>{JSON.stringify(data)}</li>)}
                </ul>
                */}
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
