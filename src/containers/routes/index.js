import React from 'react';
import { connect } from 'react-redux';
import RoutesService from '../../redux/routes/route.service';
import { getRouteTableData } from '../../redux/routes/route.selector';
import Table from '../../components/tables/Basic';

import AddRouteModal from './modals/AddRouteModal';
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
        Header: 'Route',
        accessor: 'route',
    },
    {
        Header: 'Destination 1',
        accessor: 'location1',
    },
    {
        Header: 'Destination 2',
        accessor: 'location2',
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
                <button onClick={() => this.setState({isAddModalOpen: true})}>ADD</button>
                <AddRouteModal
                    isOpen={this.state.isAddModalOpen}
                    onClose={() => this.setState({isAddModalOpen: false})}
                    onSubmit={this.handleAddRoute}
                />
                {/*
                
                <br /><br /><br /><br /><br /><br />
                <br /><input placeholder="from lng" type="text" value={this.state.fromLng} onChange={event => this.setState({ fromLng: event.target.value})} />
                <br /><input placeholder="from lat" type="text" value={this.state.fromLat} onChange={event => this.setState({ fromLat: event.target.value})} />
                <br /><input placeholder="to lat" type="text" value={this.state.toLat} onChange={event => this.setState({ toLat: event.target.value})} />
                <br /><input placeholder="to lng" type="text" value={this.state.toLng} onChange={event => this.setState({ toLng: event.target.value})} />
                <br /><input placeholder="route name" type="text" value={this.state.routeName} onChange={event => this.setState({ routeName: event.target.value})} />
                <br /><button onClick={this.handleAddRoute}>SUBMIT</button>

                <ul>
                    {this.props.routes.map(route => <li>{JSON.stringify(route)}</li>)}
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
    routes: state.routeStore.routes,
    tableData: getRouteTableData(state),
    isFetching: state.routeStore.isFetching,
});

const mapDispatchToProps = dispatch => ({
    fetchRoutes: () => dispatch(RoutesService.fetchRoutes()),
    addRoute: params => dispatch(RoutesService.addRoute(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
