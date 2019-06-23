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
                <div class="trip-form">
                    <h1>Add a Trip</h1>
                    <hr></hr><br/>
                    <div class="form-group fg-trip-modal">
                        <div class="row">
                            <div class="col-md-6">
                                <p>Departure Time:</p>
                             <input class="form-control" placeholder="" type="date" value={this.state.tripDate} onChange={event => this.setState({ tripDate:event.target.value})} />
                            </div>
                            <div class="col-md-6">
                                <p>Departure Time:</p>
                                <input class="form-control" placeholder="" type="time" value={this.state.tripTime} onChange={event => this.setState({ tripTime:event.target.value})} />
                            </div>
                        </div><br/>
                        <p>Drivers</p>
                            <select class="form-control" onChange={event => this.setState({ driver:event.target.value})}>
                                <option>-</option>
                                {this.props.drivers.map(driver => <option selected={this.state.driver === driver.Id} value={driver.Id}>{driver.FirstName}</option>)}
                            </select>
                        <br/>

                        <p>Routes</p>
                            <select class="form-control" onChange={event => this.setState({ route: event.target.value})}>
                                <option>-</option>
                                {this.props.routes.map(route => <option selected={this.state.route === route.Id} value={route.Id}>{route.Route}</option>)}
                            </select>
                        <br/>

                        <p>Vehicles</p>
                            <select  class="form-control" onChange={event => this.setState({ vehicle: event.target.value})}>
                            <option>-</option>
                                {this.props.vehicles.map(vehicle => <option selected={this.state.vehicle === vehicle.Id} value={vehicle.Id}>{vehicle.PlateNumber}</option>)}
                            </select>
                        <br/>
                            
                        <p>Price</p>
                        <input class="form-control" type="number" min="0" value={this.state.price} onChange={event => this.setState({ price:event.target.value})} />
                        <br/>    
                        
                        
                        <div class="d-flex justify-content-end">
                         <button onClick={this.handleAddTrip} class="btn btn-md btn-primary addbtn-modal">ADD</button>
                        </div>
                        
                    </div>
                </div>
                
                
                
               
                
                
                
            </Modal>
        );
    }
}

export default ModalComponent;
