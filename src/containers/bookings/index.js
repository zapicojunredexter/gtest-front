import React from 'react';
import { connect } from 'react-redux';
import BookingService from '../../redux/bookings/booking.service';

class Container extends React.PureComponent<> {
    componentDidMount() {
        this.props.fetchBookings();
    }
    render() {
        return (
            <div>
                src/containers/bookings/index.js
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    fetchBookings: () => dispatch(BookingService.fetchBookings()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
