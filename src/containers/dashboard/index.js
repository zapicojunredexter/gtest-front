import React from 'react';
import { connect } from 'react-redux';
import { Chart } from "react-charts";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import './styles.scss';
import Sales from './graphs/Sales';
import RoutesTripsInADay from './graphs/RoutesTripsInADay';
import VansInADay from './graphs/VansInADay';
import TripsPerDays from './graphs/TripsPerDays';

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
                                                <div class="stat-text">
                                                    {/*
                                                    <span class="count">{this.props.vehicles.length}</span>
                                                    */}
                                                    {this.props.vehicles.length}
                                                </div>
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
                                                <div class="stat-text">
                                                    {/*
                                                    <span class="count">{this.props.routes.length}</span>
                                                    */}
                                                    {this.props.routes.length}
                                                </div>
                                                <div class="stat-heading">Routes {this.props.routes.length}</div>
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
                                                <div class="stat-text">
                                                    {/*
                                                    <span class="count">{this.props.drivers.length}</span>
                                                    */}
                                                    {this.props.drivers.length}
                                                </div>
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
                                                <div class="stat-text">
                                                    
                                                    {/*
                                                    <span class="count">{this.props.commuters.length}</span>
                                                    */}
                                                    {this.props.commuters.length}
                                                </div>
                                                <div class="stat-heading">Commuters</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <VansInADay />
                    {/*
                    <TripsPerDays />
                    */}
                        
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    routes: state.routeStore.routes,
    bookings: state.bookingStore.bookings,
    vehicles: state.vehicleStore.vehicles,
    drivers: state.driverStore.drivers,
    commuters: state.commuterStore.commuters,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
