import React from 'react';
import { connect } from 'react-redux';
import RoutesService from '../../redux/routes/route.service';

class Container extends React.PureComponent<> {
    state = {
        fromLat: null,
        fromLng: null,
        toLat: null,
        toLng: null,
        routeName: '',
    }

    handleAddRoute = () => {
        this.props.addRoute(this.state);
    }

    render() {
        return (
            <div>
                src/containers/routes/index.js

                <br /><br /><br /><br /><br /><br />
                <br /><input placeholder="from lng" type="text" value={this.state.fromLng} onChange={event => this.setState({ fromLng: event.target.value})} />
                <br /><input placeholder="from lat" type="text" value={this.state.fromLat} onChange={event => this.setState({ fromLat: event.target.value})} />
                <br /><input placeholder="to lat" type="text" value={this.state.toLat} onChange={event => this.setState({ toLat: event.target.value})} />
                <br /><input placeholder="to lng" type="text" value={this.state.toLng} onChange={event => this.setState({ toLng: event.target.value})} />
                <br /><input placeholder="route name" type="text" value={this.state.routeName} onChange={event => this.setState({ routeName: event.target.value})} />
                <br /><button onClick={this.handleAddRoute}>SUBMIT</button>
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    fetchRoutes: () => dispatch(RoutesService.fetchRoutes()),
    addRoute: params => dispatch(RoutesService.addRoute(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
