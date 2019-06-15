import React from 'react';
import Modal from '../../../components/modal';

class ModalComponent extends React.PureComponent<> {
    state = {
        driverId: null,
    };

    /*
    static getDerivedStateFromProps = () => {
        return {
            driverId: null,
        }
    }
    */

    handleEditTrip = () => {
        const driver = this.props.drivers.find(driver => driver.Id === this.state.driverId);
        if(driver){
            this.props.onSubmit(driver);
        }
    }

    render() {
        return (
            <Modal modalWidth="60%" isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <input placeholder="" type="date" value={this.props.departDate} />
                <input placeholder="" type="time" value={this.props.departTime} />
                drivers<select onChange={event => this.setState({ driverId:event.target.value})}>
                    <option disabled>-</option>
                    {this.props.drivers.map(driver => <option selected={this.props.original && this.props.original.Driver.Id === driver.Id} value={driver.Id}>{driver.FirstName}</option>)}
                </select>
                routes
                {JSON.stringify(this.props.routes)}
                {JSON.stringify(this.props.vehicle)}
                <input placeholder="price" type="text" value={this.props.price} />
                <button onClick={this.handleEditTrip}>ADD</button>
            </Modal>
        );
    }
}

export default ModalComponent;
