import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class Container extends React.PureComponent<> {
    render() {
        return (
            <div className="dashboard__container">
                <div class="animated fadeIn">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-1">
                                            <i class="material-icons">directions_bus</i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">50</span></div>
                                                <div class="stat-heading">Vehicles</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-2">
                                            <i class="material-icons">map</i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">65</span></div>
                                                <div class="stat-heading">Daily Trips</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-3">
                                            <i class="material-icons">airline_seat_recline_normal</i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">65</span></div>
                                                <div class="stat-heading">Drivers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6">
                            <div class="card">
                                <div class="card-body">
                                    <div class="stat-widget-five">
                                        <div class="stat-icon dib flat-color-4">
                                            {/* <i style={{fontSize: 30}}class="pe-7s-users"></i> */}
                                            <i class="material-icons"> directions_run </i>
                                        </div>
                                        <div class="stat-content">
                                            <div class="text-left dib">
                                                <div class="stat-text"><span class="count">2986</span></div>
                                                <div class="stat-heading">Commuters</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-9" style={{border: "2px solid gray", height: "80vh"}}>Graph Here</div>
                        <div class="col-md-3"style={{border: "2px solid gray", height: "80vh"}}> 
                         <div style={{marginTop: "1em", height: "75vh", overflowY: "scroll"}}>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                         <input type="checkbox" name="vehicle1" value="Route" style={{marginBottom: ".5em"}}/> Route<br/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                src/containers/dashboard/index.js
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
