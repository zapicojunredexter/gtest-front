import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  } from 'recharts';
  import ReactTable, { ReactTableDefaults } from 'react-table';
//   import { useTable, useExpanded } from 'react-table'

import './styles.scss';

const addAll = numbers => {
    const summarize = array => array.reduce((acc, cur) => {
        if(isNaN(cur)) {
            return Number(acc);
        }
        return Number(acc)+Number(cur);
    }, 0);
    return summarize(numbers);
};
const getIntervalText = (nth, interval) => {
    if(nth == 1) {
        return `This ${interval}`;
    }
    return `${nth} ${interval}s ago`;
}
const DAILY_COLUMNS = [
    {
        Header: 'Route',
        accessor: 'route',
        aggregate: (something) => `...`,
    },
    {
        Header: 'DAY #',
        accessor: 'intervalNo',
        PivotValue: ({ value }) =>
          <span style={{ color: "darkblue" }}>
            {getIntervalText(value, 'day')}
          </span>,
    },
    {
        Header: 'Sales',
        accessor: 'sales',
        // aggregate: (salesArr) => `${addAll(salesArr)} PHP`,
        aggregate: (salesArr) => addAll(salesArr),
        // aggregate: (salesArr) => (salesArr),
    },
    {
        Header: 'Booking #',
        accessor: 'Id',
        aggregate: (salesArr) => `...`,
    },

];
const WEEKLY_COLUMNS = [
    {
        Header: 'Route',
        accessor: 'route',
        aggregate: (something) => `...`,
    },
    {
        Header: 'WEEK #',
        accessor: 'intervalNo',
        PivotValue: ({ value }) =>
          <span style={{ color: "darkblue" }}>
          {getIntervalText(value, 'week')}
          </span>,
    },
    {
        Header: 'Sales',
        accessor: 'sales',
        aggregate: (salesArr) => addAll(salesArr),
    },
    {
        Header: 'Booking #',
        accessor: 'Id',
        aggregate: (salesArr) => `...`,
    },
];
const MONTHLY_COLUMNS = [
    {
        Header: 'Route',
        accessor: 'route',
        aggregate: (something) => `...`,
    },
    {
        Header: 'MONTH #',
        accessor: 'intervalNo',
        PivotValue: ({ value }) =>
          <span style={{ color: "darkblue" }}>
          {getIntervalText(value, 'month')}
          </span>,
    },
    {
        Header: 'Sales',
        accessor: 'sales',
        aggregate: (salesArr) => addAll(salesArr),
    },
    {
        Header: 'Booking #',
        accessor: 'Id',
        aggregate: (salesArr) => `...`,
    },
];

const mapper = {
    days: {
        columns: DAILY_COLUMNS,
    },
    weeks: {
        columns: WEEKLY_COLUMNS,
    },
    months: {
        columns: MONTHLY_COLUMNS,
    },
}

class Container extends React.PureComponent<> {
    state = {
        columns: [
            {
                Header: 'Route',
                accessor: 'route',
            },
            {
                Header: 'MONTH #',
                accessor: 'intervalNo',
            },
            {
                Header: 'Sales',
                accessor: 'sales',
            },
            {
                Header: 'Booking #',
                accessor: 'Id',
            },
        ],
        data: [],
    }

    componentDidMount() {
        // this.generateGraph('15-06-2019');
    }

    generateGraph = (interval) => {
        try{
            const { trips, routes, bookings } = this.props;
            console.log('naa ra sila', bookings.map(booking => booking.Trip.Schedule.DepartDate));
            const timestampedBookings = bookings.map(booking => {
                const tripDate = booking.Trip && booking.Trip.Schedule && booking.Trip.Schedule.DepartDate;
                return {
                    ...booking,
                    _tripDate: new Date(tripDate || undefined).getTime()
                }
            });
            // const oldestRecord = timestampedBookings.reduce((acc, cur) => {
            //     return cur._tripDate < acc._tripDate ? cur: acc;
            // }, {_tripDate: new Date().getTime()});
            // if(!oldestRecord){
            //     return;
            // }
            // const prev = moment(oldestRecord._tripDate);
            // const now = moment();
            // const difference = now.diff(prev, interval) + 1;

            // const mapped = new Array(difference).fill(null).map((element, index) => {
            //     const filtered = timestampedBookings.filter(booking => {
            //         const tripDate = moment(booking._tripDate);
            //         return now.diff(tripDate, interval) === index;
            //     });
            //     // console.log('harhar', filtered);
            //     return {
            //         interval: index + 1,
            //         filtered
            //         // filtered: filtered.map(booking => booking.Trip.Schedule.DepartDate)
            //     };
            // });
            
            const now = moment();
            const val = timestampedBookings.map(booking => {
                const prev = moment(booking._tripDate);
                const difference = now.diff(prev, interval) + 1;
                console.log('ehehe', booking);
                return {
                    ...booking,
                    intervalNo: difference,
                    route: booking.Trip && booking.Trip.Route && booking.Trip.Route.Route,
                    sales: booking.AmtPaid,
                };
            })
            this.setState({
                ...mapper[interval],
                data: val,
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
            <div class="row card">
                <div className="col-sm-12 card-body">
                <div class="row">
                    <div class="col-sm-6">
                        <h3 style={{textAlign: 'center'}}>SALES REPORT</h3>
                    </div>
                    <div class="col-sm-6">
                        <select
                            class="form-control"
                            onChange={ev => {
                                if(ev.target.value !== '-'){
                                    this.generateGraph(ev.target.value)
                                }
                            }}
                        >
                            <option>-</option>
                            <option value="days">DAYS</option>
                            <option value="weeks">WEEKS</option>
                            <option value="months">MONTHS</option>
                        </select>
                    </div>
                </div>
                <br />
                <ReactTable
                    defaultPageSize={5}
                    loadingText="Fetching..."
                    data={this.state.data}
                    columns={this.state.columns}
                    filterable={false}
                    pivotBy={['intervalNo','route']}
                    sorted={
                        [
                            {
                                id: 'intervalNo',
                                desc: false
                            }, {
                                id: 'route',
                                desc: false
                            }, {
                                id: 'sales',
                                desc: false
                            }, {
                                id: 'Id',
                                desc: false
                            },
                        ]
                    }
                />
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
