const driverState = store => store.driverStore.drivers;
const bookingsState = store => store.bookingStore.bookings;

export const getDriverTableData = (state) => {
    const drivers = driverState(state);
    const bookings = bookingsState(state);
    console.log('ATATATYYAS', bookings);
    /*
    AccountType: "Driver"
    BirthDate: "12-13-1990"
    ContactNumber: "09123456789"
    FirstName: "John"
    Gender: "male"
    Id: "IbcdIcrxJwUOFLuEqhLgRU61gdR2"
    LastName: "Doe"
    WalletBalance: 0
    createdAt: {_seconds: 1558800621, _nanoseconds: 265000000}
    deleted: false
    updatedAt: {_seconds: 1558800621, _nanoseconds: 265000000}
    __proto__: Object
    */
    const data = drivers.map(driver => {
        const driverBookings = bookings.filter(booking => booking.Trip && booking.Trip.Driver && booking.Trip.Driver.Id === driver.Id);
        const totalEarnings = driverBookings.reduce((acc, cur) => {
            return Number(cur.AmtPaid) + acc;
        }, 0);
        return {
            email: driver.email,
            name: `${driver.FirstName} ${driver.LastName}`,
            birthDate: driver.BirthDate,
            contactNumber: driver.ContactNumber,
            gender: driver.Gender,
            earned: `PHP ${Number(totalEarnings * 0.2).toFixed(2)}`
        };
    });

    return data;
}