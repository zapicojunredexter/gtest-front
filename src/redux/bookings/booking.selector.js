import { arrayToObject } from '../../utils/array.object.util';

const bookingState = store => store.bookingStore.bookings;
const commuterState = store => store.commuterStore.commuters;

export const getBookingsTableData = (state) => {
    const bookings = bookingState(state);
    const commuters = commuterState(state);

    const commutersObject = arrayToObject(commuters, 'Id')

    const data = bookings.map(booking => {
        const commuter = commutersObject[booking.CommuterId];
        return {
            id: booking.Id,
            commuter: commuter ? `${commuter.FirstName} ${commuter.LastName}` : booking.CommuterId,
            booked: `${new Date(booking.createdAt).toLocaleDateString()} ${new Date(booking.createdAt).toLocaleTimeString()}`,
            route: booking.Trip.Route.Route,
            tripId: booking.Trip.Id,
            schedule: `${booking.Trip.Schedule.DepartDate} ${booking.Trip.Schedule.DepartTime}`,
            status: booking.Status,
            seats: booking.Seats,
        };
    });;

    return data;
}