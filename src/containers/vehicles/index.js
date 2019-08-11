import React from 'react';
import { connect } from 'react-redux';
import VehicleService from '../../redux/vehicles/vehicle.service';
import { getVehicleTableData, getVehicleTableDataInctive } from '../../redux/vehicles/vehicle.selector';
import Table from '../../components/tables/Basic';
import ActionButton from '../../components/buttons/ActionButton';
import AddModal from './modals/AddVehicleModal';
import { showAlert } from '../../utils/alert';

import './styles.scss';
import { stat } from 'fs';

class Container extends React.PureComponent<> {
    state = {
        isAddModalOpen: false,
    }

    columnsActive = [
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
            Header: 'PLATE NUMBER',
            accessor: 'plateNumber',
            width: 320,
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
                    <button onClick={() => this.handleDisableVehicle(original.id)} class="btn btn-md btn-danger"><i class="fa fa-times"></i></button>
                </span>
            ),
            sortable: false,
            filterable: false,
        },
    ];

    columnsInActive = [
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
            Header: 'PLATE NUMBER',
            accessor: 'plateNumber',
            width: 320,
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
                    <button onClick={() => this.handleEnableVehicle(original.id)} class="btn btn-md btn-success"><i class="fa fa-check"></i></button>
                </span>
            ),
            sortable: false,
            filterable: false,
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
                <button onClick={() => this.setState({isAddModalOpen: true})} class="btn btn-md btn-primary addbtn">ADD<i class="fa fa-plus"></i></button>
                <AddModal
                    isOpen={this.state.isAddModalOpen}
                    onClose={() => this.setState({isAddModalOpen: false})}
                    onSubmit={this.handleAddVehicle}
                />
                <div className="row">
                    <div className="col-md-6">
                        <Table
                            loading={this.props.isFetching}
                            columns={this.columnsActive}
                            data={this.props.tableData}
                        />
                    </div>
                    <div className="col-md-6">
                        <Table
                            loading={this.props.isFetching}
                            columns={this.columnsInActive}
                            data={this.props.tableDataInactive}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isFetching: state.vehicleStore.isFetching,
    vehicles: state.vehicleStore.vehicles,
    tableData: getVehicleTableData(state),
    tableDataInactive: getVehicleTableDataInctive(state),
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
