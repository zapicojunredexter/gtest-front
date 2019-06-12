import React from 'react';
import Modal from '../../../components/modal';

class ModalComponent extends React.PureComponent<> {
    state = {
        plateNumber: '',
        seats: {
            'seat-1' : {
                sample: true,
            },
            'seat-2' : {
                sample: true,
            },
            'seat-3' : {
                sample: true,
            }
        },
    }

    handleAddVehicle = () => {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <Modal modalWidth="60%" isOpen={this.props.isOpen} onClose={this.props.onClose}>
                {/*
                <br /><br /><br /><br /><br /><br />
                */}
                <input placeholder="plate number" value={this.state.plateNumber} onChange={event => this.setState({ plateNumber:event.target.value})} />
                <input disabled placeholder="seats" value={this.state.seats} onChange={event => this.setState({ seats:event.target.value})} />
                <button onClick={this.handleAddVehicle}>ADD</button>
            </Modal>
        );
    }
}

export default ModalComponent;
