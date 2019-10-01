import { getBookingsTableData } from '../bookings/booking.selector';
const tripState = store => store.tripStore.trips;

const bookingState = store => store.bookingStore.bookings;

export const getTripTableData = (state) => {
    const trips = tripState(state);
    const bookings = getBookingsTableData(state);
    const data = trips.map(trip => {
        const seats = trip.Vehicle.SeatsStatus;
        const seatsValueArr = Object.values(seats);
        const takenSeats = seatsValueArr.filter(seat => seat);
        const tripBookings = bookings.filter(booking => booking.tripId === trip.Id && (booking.status === 'Travelling' || booking.status === 'Finished'));
        return {
            original: trip,
            id: trip.Id,
            departDate: trip.Schedule.DepartDate,
            departTime: trip.Schedule.DepartTime,
            depart: `${trip.Schedule.DepartDate} ${trip.Schedule.DepartTime}`,
            driver: `${trip.Driver.FirstName} ${trip.Driver.LastName}`,
            route: trip.Route.Route,
            vehicle: trip.Vehicle.PlateNumber,
            price: trip.Price,
            status: trip.Status,
            totalBookings: `${tripBookings.length}/${seatsValueArr.length}`,
            bookings: tripBookings,
        };
    });

    return data;
}
