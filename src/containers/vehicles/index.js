import React from 'react';
import { connect } from 'react-redux';
import VehicleService from '../../redux/vehicles/vehicle.service';
import { getVehicleTableData } from '../../redux/vehicles/vehicle.selector';
import Table from '../../components/tables/Basic';

import './styles.scss';

const columns = [
    {
        Header: 'Plate Number',
        accessor: 'plateNumber',
    },
    {
        Header: '',
        accessor: 'plateNumber',
        Cell: props => <span><button>CLICK ME</button></span>,
        sortable: false,
    },
];

class Container extends React.PureComponent<> {
    state = {
        plateNumber: '',
        seats: {
            'seat-1' : {
                sample: true,
            },
            'seat-2' : {
                sample: true,
            },
            'seat-3' : {
                sample: true,
            }
        },
    }

    componentDidMount(){
        this.props.fetchVehicles();
    }

    handleAddVehicle = () => {
        this.props.addVehicle(this.state)
            .then(this.props.fetchVehicles)
            .catch(err => alert(err.message));
    }
    render() {
        return (
            <div className="vehicles__container">
                src/containers/vehicles/index.js

                <br /><br /><br /><br /><br /><br />
                <input placeholder="plate number" value={this.state.plateNumber} onChange={event => this.setState({ plateNumber:event.target.value})} />
                <input disabled placeholder="seats" value={this.state.seats} onChange={event => this.setState({ seats:event.target.value})} />
                <button onClick={this.handleAddVehicle}>ADD</button>
                <ul>
                    {this.props.vehicles.map(data => <li>{JSON.stringify(data)}</li>)}
                </ul>
                <Table
                    columns={columns}
                    data={this.props.tableData}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    vehicles: state.vehicleStore.vehicles,
    tableData: getVehicleTableData(state),
});

const mapDispatchToProps = dispatch => ({
    fetchVehicles: () => dispatch(VehicleService.fetchVehicles()),
    addVehicle: params => dispatch(VehicleService.addVehicle(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
