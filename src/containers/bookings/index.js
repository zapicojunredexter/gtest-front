import React from 'react';
import { connect } from 'react-redux';
import BookingService from '../../redux/bookings/booking.service';
import { getBookingsTableData } from '../../redux/bookings/booking.selector';
import Table from '../../components/tables/Basic';
import './styles.scss';

class Container extends React.PureComponent<> {

    columns = [
        {
            Header: '#',
            accessor: null,
            Cell: (data) => (
                <span>
                    {data.viewIndex + 1}
                </span>
            ),
            width: 50,
            filterable: false,
        },
        {
            Header: 'COMMUTER',
            accessor: 'commuter',
        },
        {
            Header: 'BOOKING ID',
            accessor: 'id',
        },
        {
            Header: 'BOOKING DATE',
            accessor: 'booked',
        },
        {
            Header: 'ROUTE',
            accessor: 'route',
        },
        {
            Header: 'SCHEDULE',
            accessor: 'schedule',
        },
        {
            Header: 'STATUS',
            accessor: 'status',

            Cell: ({original}) => (
                <span className={`badge btn-${this.getStatusClass(original.status)}`}>
                    {original.status}
                </span>
            ),
            filterable: false,
        },
    ];

    componentDidMount() {
        this.props.fetchBookings();
    }

    getStatusClass = status => {
        switch(status){
            case 'Waiting':
                return 'primary';
            case 'Travelling':
                return 'success';
            case 'Cancelled':
                return 'danger';
            case 'Finished':
                return 'warning';
            default:
                return 'info';
        }
    }
    
    render() {
        return (
            <div className="bookings__container">
                <Table
                    data={this.props.tableData}
                    columns={this.columns}
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
