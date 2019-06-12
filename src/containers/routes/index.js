import React from 'react';
import { connect } from 'react-redux';
import RoutesService from '../../redux/routes/route.service';
import { getRouteTableData } from '../../redux/routes/route.selector';
import Table from '../../components/tables/Basic';

import './styles.scss';

const columns = [
    {
        Header: 'Route',
        accessor: 'route',
    },
    {
        Header: 'From',
        accessor: 'from',
    },
    {
        Header: 'To',
        accessor: 'to',
    },
];

class Container extends React.PureComponent<> {
    state = {
        fromLat: null,
        fromLng: null,
        toLat: null,
        toLng: null,
        routeName: '',
    }

    componentDidMount(){
        this.props.fetchRoutes();
    }

    handleAddRoute = () => {
        this.props.addRoute(this.state)
            .then(this.props.fetchRoutes)
            .catch(err => alert(err.message));
    }

    render() {
        return (
            <div className="routes__container">
                src/containers/routes/index.js

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
