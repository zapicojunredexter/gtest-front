import React from 'react';
import Modal from '../../../components/modal';

class ModalComponent extends React.PureComponent<> {
    state = {
        plateNumber: '',
        // seats: {
        //     'driver-seat' : {
        //         width: '49.99%',
        //         cantReserve: true,
        //     },
        //     'seat-1' : {
        //         width: '49.99%',
        //     },
        //     'seat-2' : {
        //         width: '33.33%',
        //     },
        //     'seat-3' : {
        //         width: '33.33%',
        //     },
        //     'seat-4' : {
        //         width: '33.33%',
        //     },
        //     'seat-5' : {
        //         width: '33.33%',
        //     },
        //     'seat-6' : {
        //         width: '33.33%',
        //     },
        //     'seat-7' : {
        //         width: '33.33%',
        //     },
        //     'back-seat-1' : {
        //         width: '33.33%',
        //     },
        //     'back-seat-2' : {
        //         width: '33.33%',
        //     },
        //     'back-seat-3' : {
        //         width: '33.33%',
        //     },
        // },
        seats: [
            {
                key: 'driver-seat',
                width: '49.99%',
                cantReserve: true,
            },
            {
                key: 'seat-1',
                width: '49.99%', 
            },
            {
                key: 'seat-2',
                width: '33.33%', 
            },
            {
                
                key: 'seat-3',
                width: '33.33%', 
            },
            {
                
                key: 'seat-4',
                width: '33.33%', 
            },
            {
                
                key: 'seat-5',
                width: '33.33%', 
            },
            {
                
                key: 'seat-6',
                width: '33.33%', 
            },
            {
               
                key: 'seat-7',
                width: '33.33%',  
            },
            {
                
                key: 'seat-8',
                width: '33.33%', 
            },
            {
                
                key: 'seat-9',
                width: '33.33%', 
            },
            {
                
                key: 'seat-10',
                width: '33.33%', 
            },
        ],
    }

    handleAddVehicle = () => {
        const params = {
            plateNumber: this.state.plateNumber,
            seats: this.state.seats,
        };
        this.props.onSubmit(params);
    }

    render() {
        // const seatKeys = Object.keys(this.state.seats);
        // const seatValues = Object.values(this.state.seats);
        return (
            <Modal modalWidth="60%" isOpen={this.props.isOpen} onClose={this.props.onClose}>
                
                <h1>Add a Vehicle</h1>
                    <hr></hr><br/>
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
                                <button disabled={this.state.isProcessing} class="btn btn-md btn-primary form-control" onClick={this.handleAddVehicle}>ADD</button>
                            </div>
                            <div className="col-sm-12" style={{padding:30}}>
                                <div style={{backgroundColor:'gray',flexWrap: 'wrap', display: 'flex'}}>
                                    {this.state.seats.map((seat, index) => {
                                        return (
                                            <div className={`seat-tile`} style={{width: seat.width}}>{seat.key}</div>
                                        );
                                    })}
                                </div>
                                {/*
                                <div className="row">

                                    {seatValues.map((seat, index) => {
                                        return (
                                            <div className={`col-sm-${seat.col} seat-tile`}>{seatKeys[index]}</div>
                                        );
                                    })}
                                </div>
                                */}
                                
                            </div>
                        </div>
                       
                    </div>
                
                </div>
                
                
            </Modal>
        );
    }
}

export default ModalComponent;
