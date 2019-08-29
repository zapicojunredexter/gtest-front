import React from 'react';
import { connect } from 'react-redux';
import {
    Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
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
            const { trips, routes } = this.props;
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
            const data = routes.map(route => {
                const count = filteredTrips.filter(trip => {
                    if(!(trip.Route && trip.Route.Id)) {
                        return false;
                    }
                    return (
                        route.Id === trip.Route.Id
                    );
                });
                return {
                    name: route.Route,
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

                        <ResponsiveContainer width={"100%"} height={200}>
                            <BarChart data={this.state.chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis hide dataKey="name" />
                                <YAxis />
                                <Tooltip
                                    contentStyle={{
                                        width: '50vw',
                                        whiteSpace: 'wrap'
                                    }}
                                />
                                <Bar dataKey="count" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
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
