import React from 'react';
import { connect } from 'react-redux';
import RoutesService from '../../redux/routes/route.service';
import { getRouteTableData } from '../../redux/routes/route.selector';
import Table from '../../components/tables/Basic';
import LocationService from '../../services/location.service';

import AddRouteModal from './modals/AddRouteModal';
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
        Header: 'ROUTE',
        accessor: 'route',
    },
    {
        Header: 'Destination 1',
        accessor: 'location1',
        show: false,
    },
    {
        Header: 'Destination 2',
        accessor: 'location2',
        show: false,
    },
];

class Container extends React.PureComponent<> {
    state = {
        isAddModalOpen: false,
    }

    componentDidMount(){
        this.props.fetchRoutes();
    }

    handleAddRoute = params => {
        this.props.addRoute(params)
            .then(() => {
                showAlert('SUCCESS', 'Added new Route', 'success');
                this.setState({isAddModalOpen: false});
                this.props.fetchRoutes();
            })
            .catch(err => showAlert('ERROR', err.message, 'error'));
    }

    render() {
        return (
            <div className="routes__container">
                <button onClick={() => this.setState({isAddModalOpen: true})} class="btn btn-md btn-primary  addbtn">ADD<i class="fa fa-plus"></i></button>
                <AddRouteModal
                    isOpen={this.state.isAddModalOpen}
                    onClose={() => this.setState({isAddModalOpen: false})}
                    onSubmit={this.handleAddRoute}
                    reverseGeocode={this.props.reverseGeocode}
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
    routes: state.routeStore.routes,
    tableData: getRouteTableData(state),
    isFetching: state.routeStore.isFetching,
});

const mapDispatchToProps = dispatch => ({
    fetchRoutes: () => dispatch(RoutesService.fetchRoutes()),
    addRoute: params => dispatch(RoutesService.addRoute(params)),
    reverseGeocode: (lng, lat) => dispatch(LocationService.reverseGeoCode(lng, lat)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
