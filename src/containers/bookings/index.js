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
