import React from 'react';
import Modal from '../../../components/modal';

class ModalComponent extends React.PureComponent<> {
    state = {
        fromLat: null,
        fromLng: null,
        toLat: null,
        toLng: null,
        routeName: '',
    }

    handleAddRoute = () => {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <Modal modalWidth="60%" isOpen={this.props.isOpen} onClose={this.props.onClose}>
                
                <br /><br /><br /><br /><br /><br />
                <br /><input placeholder="from lng" type="text" value={this.state.fromLng} onChange={event => this.setState({ fromLng: event.target.value})} />
                <br /><input placeholder="from lat" type="text" value={this.state.fromLat} onChange={event => this.setState({ fromLat: event.target.value})} />
                <br /><input placeholder="to lat" type="text" value={this.state.toLat} onChange={event => this.setState({ toLat: event.target.value})} />
                <br /><input placeholder="to lng" type="text" value={this.state.toLng} onChange={event => this.setState({ toLng: event.target.value})} />
                <br /><input placeholder="route name" type="text" value={this.state.routeName} onChange={event => this.setState({ routeName: event.target.value})} />
                <br /><button onClick={this.handleAddRoute}>SUBMIT</button>
                {/*
                
                <ul>
                    {this.props.routes.map(route => <li>{JSON.stringify(route)}</li>)}
                </ul>
                */}
                
            </Modal>
        );
    }
}

export default ModalComponent;
