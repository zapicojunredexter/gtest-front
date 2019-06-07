import BookingService from '../redux/bookings/booking.service';
import CommuterService from '../redux/commuters/commuter.service';
import DriverService from '../redux/drivers/driver.service';
import RouteService from '../redux/routes/route.service';
import TripService from '../redux/trips/trip.service';
import UserService from '../redux/user/user.service';
import VehicleService from '../redux/vehicles/vehicle.service';
export default class Service {
    static snapFetch = () => async dispatch => {
        dispatch(BookingService.fetchBookings());
        dispatch(CommuterService.fetchCommuters());
        dispatch(DriverService.fetchDrivers());
        dispatch(RouteService.fetchRoutes());
        dispatch(TripService.fetchTrips());
        dispatch(VehicleService.fetchVehicles());
    }
};