import { combineReducers } from 'redux';
import bookingStore from './bookings/booking.reducer';
import commuterStore from './commuters/commuter.reducer';
import driverStore from './drivers/driver.reducer';
import routeStore from './routes/route.reducer';
import tripStore from './trips/trip.reducer';
import userStore from './user/user.reducer';
import vehicleStore from './vehicles/vehicle.reducer';

export default combineReducers({
    bookingStore,
    commuterStore,
    driverStore,
    routeStore,
    tripStore,
    userStore,
    vehicleStore,
});