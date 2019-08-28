import React from 'react';
import { connect } from 'react-redux';
import {
    Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import './styles.scss';


class Container extends React.PureComponent<> {
    state = {
        selectedDate: null,
        chartData: [],
    }

    componentDidMount() {
        // this.generateGraph(new Date());
    }

    generateGraph = (dateObj) => {
        try{
            const date = new Date(dateObj);
            const { trips, vehicles } = this.props;
            const filteredTrips = trips.filter(trip => {
                if(!(trip.Schedule && trip.Schedule.DepartDate)){
                    return false;
                }
                const tripDate = new Date(trip.Schedule.DepartDate);
                return (
                    tripDate.getDate() === date.getDate() &&
                    tripDate.getFullYear() === date.getFullYear() &&
                    tripDate.getMonth() === date.getMonth()
                );
            });
            const data = vehicles.map(vehicle => {
                const count = filteredTrips.filter(trip => {
                    if(!(trip.Vehicle && trip.Vehicle.Id)) {
                        return false;
                    }
                    return (
                        vehicle.Id === trip.Vehicle.Id
                    );
                });
                return {
                    name: vehicle.PlateNumber,
                    count: count.length
                };
            });
            this.setState({
                chartData: data,
                selectedDate: dateObj
            });
        }catch(err){
            console.error(err);
        }
    }

    datify = (dateObj) => {
        try {
            return dateObj.toISOString().substring(0, 10);
        } catch {
            return null
        }
    }

    render() {
           
        return (
            <div class="row">
                <div
                    class="col-md-12"
                    style={{
                        border: "0px solid silver",
                        overflow: "scroll",
                        height: "80vh"
                    }}
                >
                    <input type="date" onChange={(ev) => this.generateGraph((ev.target.value))} value={this.datify(this.state.selectedDate)} />
                    {this.state.chartData.length > 0 ? (
                        <BarChart width={730} height={250} data={this.state.chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    ) : (
                        <div>NO DATE SELECTED</div>
                    )}     
              </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    routes: state.routeStore.routes,
    bookings: state.bookingStore.bookings,
    vehicles: state.vehicleStore.vehicles,
    trips: state.tripStore.trips,
    drivers: state.driverStore.drivers,
    commuters: state.commuterStore.commuters,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
