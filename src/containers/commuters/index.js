import React from 'react';
import { connect } from 'react-redux';
import CommuterService from '../../redux/commuters/commuter.service';
import { getCommutersTableData } from '../../redux/commuters/commuter.selector';

import Table from '../../components/tables/Basic';

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
    {
        Header: 'Balance',
        accessor: 'points',
    },
];

class Container extends React.PureComponent<> {
    componentDidMount(){
        this.props.fetchCommuters();
    }
    render() {
        return (
            <div className="commuters__container">
                {/*
                src/containers/commuters/index.js


                <br /><br /><br /><br /><br /><br />
                <ul>
                    {this.props.commuters.map(data => <li>{JSON.stringify(data)}</li>)}
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
    commuters: state.commuterStore.commuters,
    tableData: getCommutersTableData(state),
    isFetching: state.commuterStore.isFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCommuters: () => dispatch(CommuterService.fetchCommuters()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
