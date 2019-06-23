import React from 'react';
import { connect } from 'react-redux';
import CommuterService from '../../redux/commuters/commuter.service';
import { getCommutersTableData } from '../../redux/commuters/commuter.selector';

import Table from '../../components/tables/Basic';
import { showAlert } from '../../utils/alert';

import './styles.scss';

class Container extends React.PureComponent<> {
    columns = [
        {
            Header: '#',
            accessor: null,
            Cell: (data) => (
                <span>
                    {data.viewIndex + 1}
                </span>
            ),
            filterable: false,
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
            filterable: false,
        },
        {
            Header: 'Balance',
            accessor: 'points',
            filterable: false,
        },
        {
            Header: '',
            accessor: null,
            filterable: false,
            Cell: ({original}) => (
                <span>
                    <button className="btn btn-primary" onClick={() => this.handleAddBalance(original)}>ADD BALANCE</button>
                </span>
            ),
        }
    ];

    componentDidMount(){
        this.props.fetchCommuters();
    }

    handleAddBalance = commuter => {
        const points = window.prompt('INPUT AMOUNT');
        if(points) {
            this.props.addBalance(commuter.id, Number(points))
                .then(() => {
                    showAlert('SUCCESS', 'Added balance to Commuter', 'success');
                    this.props.fetchCommuters();
                })
                .catch(err => showAlert('ERROR', err.message, 'error'));
        }
    }
    render() {
        return (
            <div className="commuters__container">
                <Table
                    data={this.props.tableData}
                    columns={this.columns}
                    loading={this.props.isFetching}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    commuters: state.commuterStore.commuters,
    tableData: getCommutersTableData(state),
    isFetching: state.commuterStore.isFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCommuters: () => dispatch(CommuterService.fetchCommuters()),
    addBalance: (userId, points) => dispatch(CommuterService.addBalance(userId, points)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
