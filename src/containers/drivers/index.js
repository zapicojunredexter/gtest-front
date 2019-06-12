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
                {data.viewIndex}
            </span>
        ),
        width: 50,
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
        alert(JSON.stringify(params));
        /*
        this.props.addDriver(this.state)
            .then(this.props.fetchDrivers)
            .catch(err => alert(err.message));
            */
        
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
                
                <button onClick={() => this.setState({isAddModalOpen: true})}>ADD</button>
                <AddDriverModal
                    isOpen={this.state.isAddModalOpen}
                    onClose={() => this.setState({isAddModalOpen: false})}
                    onSubmit={this.handleAddDriver}
                />
                {/*}

                <br /><br /><br /><br /><br /><br />
                <br /><input type="email" onChange={event => this.setState({ email: event.target.value})} placeholder="emal" value={this.state.email} type="email" />
                <br /><input onChange={event => this.setState({ password: event.target.value})} placeholder="password" value={this.state.password} type="text" />
                <br /><input onChange={event => this.setState({ firstName: event.target.value})} placeholder="firstname" value={this.state.firstName} type="text" />
                <br /><input onChange={event => this.setState({ lastName: event.target.value})} placeholder="lastname" value={this.state.lastName} type="text" />
                <br /><input onChange={event => this.setState({ birthDate: event.target.value})} placeholder="birthdate" value={this.state.birthDate} type="date" />
                <br /><input onChange={event => this.setState({ contactNumber: event.target.value})} placeholder="contact number" value={this.state.contactNumber} type="text" />
                <br /><input onChange={event => this.setState({ gender: event.target.value})} placeholder="" value={this.state.gender} type="text" />
                <br /><button onClick={this.handleAddDriver}>SUBMIT</button>

                <ul>
                    {this.props.drivers.map(data => <li>{JSON.stringify(data)}</li>)}
                </ul>
                */}
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
