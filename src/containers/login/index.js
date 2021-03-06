import React from 'react';
import { connect } from 'react-redux';
import UserService from '../../redux/user/user.service';
import { showAlert, confirmAlert } from '../../utils/alert';

class Container extends React.PureComponent<> {
    state ={
        username: '',
        password: ''
    }
    onPressLogin = () => {
        
        this.props.login(this.state.username, this.state.password)
        .then(() => {
        })
        .catch(err => showAlert('ERROR', err.message, 'error'));;
    }
    render() {
        return (
         <div>
            <div>
                {/* <button onClick={this.onPressLogin}>LOGIN</button> */}
            </div>
            <div style={{margin: 0, position: "absolute", top: "40%",
             left: "50%", transform: "translate(-50%, -50%)", height: "50vh", borderRadius: 2}}>

             <div class="row" style={{width: "95%", margin: "0 10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

                 <div class="col-md-12">
                  <input onChange={event => this.setState({username: event.target.value})} value={this.state.username} class="form-control" type="text" placeholder="&#xf007; Username" style={{width: "100%",fontFamily: "Arial, FontAwesome", margin: "3em 0 1em 0"}}/>
                 </div>
                 <div class="col-md-12">
                  <input onChange={event => this.setState({password: event.target.value})} value={this.state.password}  class="form-control" type="password" placeholder="&#xf084; Password" style={{width: "100%",fontFamily: "Arial, FontAwesome",margin: "1em 0"}}/>
                 </div>
                 <div class="col-md-12">
                     <button onClick={this.onPressLogin} class="btn btn-md btn-primary" style={{width: "100%",margin: "1em 0"}}>Login</button>
                 </div>
             </div>
            
            
            </div>
         </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(UserService.login(username, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
