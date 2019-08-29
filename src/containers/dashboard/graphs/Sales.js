import React from 'react';
import { connect } from 'react-redux';
import {
    Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  } from 'recharts';
  import ReactTable, { ReactTableDefaults } from 'react-table';
//   import { useTable, useExpanded } from 'react-table'

import './styles.scss';

const addAll = numbers => {
    return numbers.reduce((acc, cur) => {
        if(isNaN(cur)) {
            return acc;
        }
        return acc+cur;
    }, 0);
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
            {value}weekNo
          </span>,
    },
    {
        Header: 'Sales',
        accessor: 'sales',
        aggregate: (salesArr) => `${addAll(salesArr)} PHP`,
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
            {value}weekNo
          </span>,
    },
    {
        Header: 'Sales',
        accessor: 'sales',
        aggregate: (salesArr) => `${addAll(salesArr)} PHP`,
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
            {value}weekNo
          </span>,
    },
    {
        Header: 'Sales',
        accessor: 'sales',
        aggregate: (salesArr) => `${addAll(salesArr)} PHP`,
    },
];

const mapper = {
    daily: {
        columns: DAILY_COLUMNS,
    },
    weekly: {
        columns: WEEKLY_COLUMNS,
    },
    monthly: {
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
            const oldestRecord = timestampedBookings.reduce((acc, cur) => {
                return cur._tripDate < acc._tripDate ? cur: acc;
            }, {_tripDate: new Date().getTime()});
            console.log('oldestRec',oldestRecord);
            this.setState({
                ...mapper[interval],
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
        const data = [
            {
                route: 123,
                intervalNo: 'test',
                sales: 10,
            },
            {
                route: 234,
                intervalNo: 'test 1',
                sales: 10,
            },
            {
                route: 345,
                intervalNo: 'test',
                sales: 10,
            },
            {
                route: 456,
                intervalNo: 'test',
                sales: 10,
            },
            {
                route: 567,
                intervalNo: 'test',
                sales: 10,
            },
        ];
        const columns = [
            {
                Header: 'Route',
                accessor: 'route',
                // aggregate: (something) => `${JSON.stringify(something)}xd`,
                aggregate: (something) => `...`,
                // Aggregated: (asd) => <div>{`${JSON.stringify(asd)}`}ajaaja</div>,
                
                PivotValue: ({ value }) =>
                  <span style={{ color: "darkblue" }}>
                    {value}route
                  </span>,
            },
            {
                Header: 'Week #',
                accessor: 'weekNo',
                PivotValue: ({ value }) =>
                  <span style={{ color: "darkblue" }}>
                    {value}weekNo
                  </span>,
            },
            {
                Header: 'Sales',
                accessor: 'sales',
                aggregate: (salesArr) => `${addAll(salesArr)} PHP`,
                
            },
            
        ];
        return (
            <div class="row">
                <button onClick={this.generateGraph}>class</button>
                <input onClick={() => this.generateGraph('daily')} type="radio" name="interval" />
                <input onClick={() => this.generateGraph('weekly')} type="radio" name="interval" />
                <input onClick={() => this.generateGraph('monthly')} type="radio" name="interval" />
                <ReactTable
                    defaultPageSize={10}
                    loadingText="Fetching..."
                    data={this.state.data}
                    columns={this.state.columns}
                    filterable={false}
                    pivotBy={['intervalNo']}
                    // SubComponent={row => {
                    //     return (
                        //     <div>
                        //         <ReactTable
                        //                     defaultPageSize={10}
                        //                     loadingText="Fetching..."
                        //                     data={data}
                        //                     columns={columns}
                        //                     pageSize={2}
                        //                     // TheadComponent={() => null}
                        //                     showPagination={false}
                        //             />
                        //     </div>
                    //     )
                    // }}
                    onPageChange={(a) => alert(JSON.stringify(a))}
                    
                />
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
