import React from 'react';
import Modal from '../../../components/modal';

class ModalComponent extends React.PureComponent<> {
    state = {
        plateNumber: '',
        seats: {
            'driver-seat' : {
                col: 6,
            },
            'seat-1' : {
                col: 6,
            },
            'seat-2' : {
                col: 4,
            },
            'seat-3' : {
                col: 4,
            },
            'seat-4' : {
                col: 4,
            },
            'seat-5' : {
                col: 4,
            },
            'seat-6' : {
                col: 4,
            },
            'seat-7' : {
                col: 4,
            },
        },
    }

    handleAddVehicle = () => {
        this.props.onSubmit(this.state);
    }

    render() {
        const seatKeys = Object.keys(this.state.seats);
        const seatValues = Object.values(this.state.seats);
        return (
            <Modal modalWidth="60%" isOpen={this.props.isOpen} onClose={this.props.onClose}>
                
                <div>
                    <div class='form-group'>
                        <div class="row">
                            <div class="col-sm-8">
                                <input class="form-control" placeholder="plate number" value={this.state.plateNumber} onChange={event => this.setState({ plateNumber:event.target.value})} />
                            </div>
                            {/*
                            <div class="col-md-4 col-sm-4">
                                <input class="form-control" disabled placeholder="seats" value={this.state.seats} onChange={event => this.setState({ seats:event.target.value})} />
                            </div>
                            */}
                            <div class="col-sm-4">
                                <button class="btn btn-md btn-primary form-control" onClick={this.handleAddVehicle}>ADD</button>
                            </div>
                            <div className="col-sm-12" style={{padding:30}}>
                                <div className="row">

                                    {seatValues.map((seat, index) => {
                                        return (
                                            <div className={`col-sm-${seat.col} seat-tile`}>{seatKeys[index]}</div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                       
                    </div>
                
                </div>
                
                
            </Modal>
        );
    }
}

export default ModalComponent;
