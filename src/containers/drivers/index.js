import React from 'react';
import { connect } from 'react-redux';
import DriverService from '../../redux/drivers/driver.service';

import { getDriverTableData } from '../../redux/drivers/driver.selector';

import Table from '../../components/tables/Basic';

import AddDriverModal from './modals/AddDriverModal';
import { showAlert } from '../../utils/alert';

import './styles.scss';

const columns = [
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
        Header: 'Email',
        accessor: 'email',
    },
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Birth Date',
        accessor: 'birthDate',
    },
    {
        Header: 'Contact Number',
        accessor: 'contactNumber',
    },
    {
        Header: 'Gender',
        accessor: 'gender',
        filterable: false,
    },
];

class Container extends React.PureComponent<> {
    state = {
        isAddModalOpen: false,
    }

    componentDidMount () {
        // this.props.fetchDrivers();
    }

    handleAddDriver = params => {
        
        this.props.addDriver(params)
           .then(() => {
               showAlert('SUCCESS', 'Added new Driver', 'success');
               this.setState({isAddModalOpen: false});
               this.props.fetchDrivers();
           })
           .catch(err => showAlert('ERROR', err.message, 'error'));

    }
    render() {
        return (
            <div className="drivers__container">
                
                <button onClick={() => this.setState({isAddModalOpen: true})} class="btn btn-md btn-primary  addbtn">ADD<i class="fa fa-plus"></i></button>
                <AddDriverModal
                    isOpen={this.state.isAddModalOpen}
                    onClose={() => this.setState({isAddModalOpen: false})}
                    onSubmit={this.handleAddDriver}
                />
                <Table
                    data={this.props.tableData}
                    columns={columns}
                    loading={this.props.isFetching}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    drivers: state.driverStore.drivers,
    isFetching: state.driverStore.isFetching,
    tableData: getDriverTableData(state),
});

const mapDispatchToProps = dispatch => ({
    fetchDrivers: () => dispatch(DriverService.fetchDrivers()),
    addDriver: params => dispatch(DriverService.addDriver(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
