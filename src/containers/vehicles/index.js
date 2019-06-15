import React from 'react';
import { connect } from 'react-redux';
import VehicleService from '../../redux/vehicles/vehicle.service';
import { getVehicleTableData } from '../../redux/vehicles/vehicle.selector';
import Table from '../../components/tables/Basic';
import ActionButton from '../../components/buttons/ActionButton';
import AddModal from './modals/AddVehicleModal';
import { showAlert } from '../../utils/alert';

import './styles.scss';

class Container extends React.PureComponent<> {
    state = {
        isAddModalOpen: false,
    }

    columns = [
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
            Header: 'Plate Number',
            accessor: 'plateNumber',
        },
        {
            Header: 'Status',
            accessor: 'isActive',
        },
        {
            Header: '',
            accessor: 'actions',
            Cell: ({original}) => (
                <span>
                    {/*
                    <ActionButton
                        type="danger"
                        iconClass="fa fa-ban"
                        onClick={() => this.handleDisableVehicle(original.id)}
                    />
                    */}
                    <button onClick={() => this.handleDisableVehicle(original.id)}>disableVehicle</button>
                    <button onClick={() => this.handleEnableVehicle(original.id)}>enableVehicle</button>
                </span>
            ),
            width: 350,
            sortable: false,
        },
    ];

    componentDidMount(){
        // this.props.fetchVehicles();
    }

    handleEnableVehicle = (vehicleId) => {
        this.props.enableVehicle(vehicleId)
            .then(() => {
                showAlert('SUCCESS', 'Enable vehicle', 'success');
                this.props.fetchVehicles();
            })
            .catch(err => showAlert('ERROR', err.message, 'error'));
    }

    handleDisableVehicle = (vehicleId) => {
        this.props.disableVehicle(vehicleId)
            .then(() => {
                showAlert('SUCCESS', 'Disabled vehicle', 'success');
                this.props.fetchVehicles();
            })
            .catch(err => showAlert('ERROR', err.message, 'error'));
    }

    handleAddVehicle = params => {
        this.props.addVehicle(params)
            .then(() => {
                showAlert('SUCCESS', 'Added new Vehicle', 'success');
                this.setState({isAddModalOpen: false});
                this.props.fetchVehicles();
            })
            .catch(err => showAlert('ERROR', err.message, 'error'));

    }
    render() {
        return (
            <div className="vehicles__container">
                <button onClick={() => this.setState({isAddModalOpen: true})}>ADD</button>
                <AddModal
                    isOpen={this.state.isAddModalOpen}
                    onClose={() => this.setState({isAddModalOpen: false})}
                    onSubmit={this.handleAddVehicle}
                />
                <Table
                    loading={this.props.isFetching}
                    columns={this.columns}
                    data={this.props.tableData}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isFetching: state.vehicleStore.isFetching,
    vehicles: state.vehicleStore.vehicles,
    tableData: getVehicleTableData(state),
});

const mapDispatchToProps = dispatch => ({
    fetchVehicles: () => dispatch(VehicleService.fetchVehicles()),
    addVehicle: params => dispatch(VehicleService.addVehicle(params)),
    disableVehicle: id => dispatch(VehicleService.disableVehicle(id)),
    enableVehicle: id => dispatch(VehicleService.enableVehicle(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
