import React from 'react';
import { connect } from 'react-redux';
import BookingService from '../../redux/bookings/booking.service';
import Table from '../../components/tables/Basic';
import './styles.scss';

class Container extends React.PureComponent<> {
    componentDidMount() {
        this.props.fetchBookings();
    }
    render() {
        
          const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
          }];
        return (
            <div className="bookings__container">
                src/containers/bookings/index.js
                <ul>
                {this.props.bookings.map(booking => <li>{JSON.stringify(booking)}</li>)}
                </ul>
                <Table data={this.props.tableData} columns={columns}/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    bookings: state.bookingStore.bookings,
    tableData: state.bookingStore.bookings,
});

const mapDispatchToProps = dispatch => ({
    fetchBookings: () => dispatch(BookingService.fetchBookings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
