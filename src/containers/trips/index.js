import React from 'react';
import { connect } from 'react-redux';

import TripsService from '../../redux/trips/trip.service';
import { getTripTableData } from '../../redux/trips/trip.selector';

import Table from '../../components/tables/Basic';

import AddTripModal from './modals/AddTripModal';
import EditTripModal from './modals/EditTripModal';
import { showAlert, confirmAlert } from '../../utils/alert';

import './styles.scss';

class Container extends React.PureComponent<> {
    state = {
        isAddModalOpen: false,
        toEdit: null,
    };

    columns = [
        {
            Header: '#',
            accessor: null,
            Cell: (data) => (
                <span>
                    {data.viewIndex + 1}
                </span>
            ),
            width: 50,
            filterable: false,
        },
        {
            Header: 'DEPARTURE',
            accessor: 'depart',
            width: 150,
        },
        {
            Header: 'DRIVER',
            accessor: 'driver',
            width: 150,
        },
        {
            Header: 'ROUTE',
            accessor: 'route',
            width: 150,
        },
        {
            Header: 'VEHICLE',
            accessor: 'vehicle',
            width: 100,
        },
        {
            Header: 'PRICE',
            accessor: 'price',
            width: 100,
        },
        {
            Header: 'BOOKINGS',
            accessor: 'totalBookings',
            filterable: false,
            width: 100,
        },
        {
            Header: 'STATUS',
            accessor: 'status',

            Cell: ({original}) => (
                <span className={`badge btn-${this.getStatusClass(original.status)}`}>
                    {original.status}
                </span>
            ),
            width: 100,
            filterable: false,
        },
        {
            Header: '',
            accessor: null,
            width: 200,
            Cell: ({original}) => (
                <span class="trip-edit-cancel-btn">
                  <button onClick={() => this.handleClickEdit(original)} class="btn btn-md btn-warning"><i class="fa fa-pencil"></i></button>
                  <button onClick={() => this.handleCancel(original.id)} class="btn btn-md btn-danger"><i class="fa fa-times"></i></button>
                </span>
            ),
            filterable: false,
        },
    ]

    componentDidMount(){
        // this.props.fetchTrips();
    }

    getStatusClass = status => {
        switch(status){
            case 'Waiting':
                return 'primary';
            case 'Travelling':
                return 'success';
            case 'Cancelled':
                return 'danger';
            case 'Finished':
                return 'warning';
            default:
                return 'info';
        }
    }

    handleCancel = (id) => {
        confirmAlert('Confirm Cancel', 'Are you sure you want to cancel Trip?', () => {
            this.props.cancelTrip(id)
                .then(() => {
                    showAlert('SUCCESS', 'Cancelled Trip', 'success');
                    this.props.fetchTrips();
                })
                .catch(err => showAlert('ERROR', err.message, 'error'))
        });
        /*
        this.props.cancelTrip(id)
            .then(() => {
                showAlert('SUCCESS', 'Cancelled Trip', 'success');
                this.props.fetchTrips();
            })
            .catch(err => showAlert('ERROR', err.message, 'error'))
        */
    }

    handleClickEdit = trip => {
        this.setState({toEdit: trip});
    }

    handleEditTrip = driver => {
        this.props.updateTripDriver(this.state.toEdit.id, driver)
            .then(() => {
                showAlert('SUCCESS', 'Updated trip Driver', 'success');
                this.setState({toEdit: null});
                this.props.fetchTrips();
            })
            .catch(err => showAlert('ERROR', err.message, 'error'));
        // alert(JSON.stringify(driver));
        // this.props.updateTripDriver();
    }

    handleAddTrip = params => {
        this.props.addTrip(params)
            .then(() => {
                showAlert('SUCCESS', 'Added new Trip', 'success');
                this.setState({isAddModalOpen: false});
                this.props.fetchTrips();
            })
            .catch(err => showAlert('ERROR', err.message, 'error'));
    }
    render() {
        return (
            <div className="trips__container">
                <button onClick={() => this.setState({isAddModalOpen: true})} class="btn btn-md btn-primary  addbtn">ADD<i class="fa fa-plus"></i></button>
                <AddTripModal
                    isOpen={this.state.isAddModalOpen}
                    onClose={() => this.setState({isAddModalOpen: false})}
                    drivers={this.props.drivers}
                    routes={this.props.routes}
                    vehicles={this.props.vehicles}
                    onSubmit={this.handleAddTrip}
                />
                <EditTripModal
                    isOpen={!!this.state.toEdit}
                    onClose={() => this.setState({toEdit: null})}
                    drivers={this.props.drivers}
                    onSubmit={this.handleEditTrip}
                    {...this.state.toEdit}
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
                    columns={this.columns}
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
    drivers: state.driverStore.drivers.filter(data => !data.isDeleted),
    vehicles: state.vehicleStore.vehicles.filter(data => !data.isDeleted),
});

const mapDispatchToProps = dispatch => ({
    fetchTrips: () => dispatch(TripsService.fetchTrips()),
    addTrip: params => dispatch(TripsService.addTrip(params)),
    cancelTrip: tripId => dispatch(TripsService.cancelTrip(tripId)),
    updateTripDriver: (tripId, driver) => dispatch(TripsService.updateTripDriver(tripId, driver))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
