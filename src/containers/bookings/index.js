import React from 'react';
import { connect } from 'react-redux';
import BookingService from '../../redux/bookings/booking.service';
import { getBookingsTableData } from '../../redux/bookings/booking.selector';
import Table from '../../components/tables/Basic';
import './styles.scss';

const columns = [
    {
        Header: 'Commuter',
        accessor: 'commuter',
    },
    {
        Header: 'Booked',
        accessor: 'booked',
    },
    {
        Header: 'Route',
        accessor: 'route',
    },
    {
        Header: 'Schedule',
        accessor: 'schedule',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
];

class Container extends React.PureComponent<> {
    componentDidMount() {
        this.props.fetchBookings();
    }
    render() {
        return (
            <div className="bookings__container">
                <Table
                    data={this.props.tableData}
                    columns={columns}
                    loading={this.props.isFetching}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    bookings: state.bookingStore.bookings,
    tableData: getBookingsTableData(state),
    isFetching: state.bookingStore.isFetching,
});

const mapDispatchToProps = dispatch => ({
    fetchBookings: () => dispatch(BookingService.fetchBookings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
