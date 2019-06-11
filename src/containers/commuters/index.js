import React from 'react';
import { connect } from 'react-redux';
import CommuterService from '../../redux/commuters/commuter.service';
import { getCommutersTableData } from '../../redux/commuters/commuter.selector';

import Table from '../../components/tables/Basic';

import './styles.scss';

const columns = [
    {
        Header: 'Email',
        accessor: 'test',
    },
    {
        Header: 'Name',
        accessor: 'test1',
    },
    {
        Header: 'Birth Date',
        accessor: 'test2',
    },
    {
        Header: 'Contact Number',
        accessor: 'test3',
    },
    {
        Header: 'Gender',
        accessor: 'test4',
    },
    {
        Header: 'Balance',
        accessor: 'test5',
    },
];

class Container extends React.PureComponent<> {
    componentDidMount(){
        this.props.fetchCommuters();
    }
    render() {
        return (
            <div className="commuters__container">
                src/containers/commuters/index.js


                <br /><br /><br /><br /><br /><br />
                <ul>
                    {this.props.commuters.map(data => <li>{JSON.stringify(data)}</li>)}
                </ul>
                <Table
                    data={this.props.tableData}
                    columns={columns}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    commuters: state.commuterStore.commuters,
    tableData: getCommutersTableData(state),
});

const mapDispatchToProps = dispatch => ({
    fetchCommuters: () => dispatch(CommuterService.fetchCommuters()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
