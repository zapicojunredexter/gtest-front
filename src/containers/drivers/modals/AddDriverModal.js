import React from 'react';
import { debounce } from 'lodash';
import Modal from '../../../components/modal';

class ModalComponent extends React.PureComponent<> {
    state = {
        email: '',
        password: '',
        password2: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        contactNumber: '',
        gender: 'male',
    }

    handleAddDriver = debounce(() => {
        const {
            email,
            password,
            firstName,
            lastName,
            birthDate,
            contactNumber,
            gender,
        } = this.state;
        this.props.onSubmit(this.state);
    }, 500);

    render() {
        return (
            <Modal modalWidth="60%" isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <div className="fg-add-driver">

                    <h1>Add a Driver</h1>
                    <hr></hr><br/>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Email:</p>
                            <input className="form-control" onChange={event => this.setState({ email: event.target.value})} value={this.state.email} type="email" />
                        </div>
                        <div className="col-sm-6">
                            <p>Password:</p>
                            <input className="form-control" onChange={event => this.setState({ password: event.target.value})} placeholder="password" value={this.state.password}  type="password" />
                        </div>
                        <div className="col-sm-6">
                            <p>Confirm Password:</p>
                            <input className="form-control" onChange={event => this.setState({ password2: event.target.value})} value={this.state.password2} type="password" />
                        </div>
                        <div className="col-sm-6">
                            <p>First Name:</p>
                            <input className="form-control"  onChange={event => this.setState({ firstName: event.target.value})} value={this.state.firstName} />
                        </div>
                        <div className="col-sm-6">
                            <p>Last Name:</p>
                            <input className="form-control" onChange={event => this.setState({ lastName: event.target.value})} value={this.state.lastName} />
                        </div>
                        <div className="col-sm-6">
                            <p>Birthdate:</p>
                            <input className="form-control" onChange={event => this.setState({ birthDate: event.target.value})} value={this.state.birthDate} type="date" />
                        </div>
                        <div className="col-sm-6">
                            <p>Contact Number:</p>
                            <input className="form-control" onChange={event => this.setState({ contactNumber: event.target.value})} placeholder="contact number" value={this.state.contactNumber} />
                        </div>
                        <div className="col-sm-6">
                            <p>Gender:</p>
                            <div style={{display: 'flex', flexDirection: 'row'}}>

                            <input className="form-control" checked={this.state.gender === 'male'} onClick={() => this.setState({ gender: 'male'})} type="radio" style={{width: 50}}/> Male
                            <input className="form-control" checked={this.state.gender === 'female'} onClick={() => this.setState({ gender: 'female'})} type="radio" style={{width: 50}}/> Female
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <button onClick={this.handleAddDriver} class="btn btn-md btn-primary addbtn-modal">ADD</button>
                </div>

            </Modal>
        );
    }
}

export default ModalComponent;
