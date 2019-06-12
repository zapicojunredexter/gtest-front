import React from 'react';
import Modal from '../../../components/modal';

class ModalComponent extends React.PureComponent<> {
    state = {
        tripDate: null,
        tripTime: null,
        driver: null,
        route: null,
        vehicle: null,
        price: null,
    };

    handleAddTrip = () => {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <Modal modalWidth="60%" isOpen={this.props.isOpen} onClose={this.props.onClose}>
                
                <input placeholder="" type="date" value={this.state.tripDate} onChange={event => this.setState({ tripDate:event.target.value})} />
                <input placeholder="" type="time" value={this.state.tripTime} onChange={event => this.setState({ tripTime:event.target.value})} />
                drivers<select onChange={event => this.setState({ driver:event.target.value})}>
                    <option>-</option>
                    {this.props.drivers.map(driver => <option selected={this.state.driver === driver.Id} value={driver.Id}>{driver.FirstName}</option>)}
                </select>
                routes<select onChange={event => this.setState({ route: event.target.value})}>
                    <option>-</option>
                    {this.props.routes.map(route => <option selected={this.state.route === route.Id} value={route.Id}>{route.Route}</option>)}
                </select>
                vehicle<select onChange={event => this.setState({ vehicle: event.target.value})}>
                    <option>-</option>
                    {this.props.vehicles.map(vehicle => <option selected={this.state.vehicle === vehicle.Id} value={vehicle.Id}>{vehicle.PlateNumber}</option>)}
                </select>
                <input placeholder="price" type="text" value={this.state.price} onChange={event => this.setState({ price:event.target.value})} />
                <button onClick={this.handleAddTrip}>ADD</button>
            </Modal>
        );
    }
}

export default ModalComponent;
