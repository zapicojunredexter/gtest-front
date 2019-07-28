
const tripState = store => store.tripStore.trips;

export const getTripTableData = (state) => {
    const trips = tripState(state);
    const data = trips.map(trip => {
        const seats = trip.Vehicle.SeatsStatus;
        const seatsValueArr = Object.values(seats);
        const takenSeats = seatsValueArr.filter(seat => seat);

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
            totalBookings: `${takenSeats.length}/${seatsValueArr.length}`
        };
    });;

    return data;
}
