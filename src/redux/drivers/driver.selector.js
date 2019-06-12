const driverState = store => store.driverStore.drivers;

export const getDriverTableData = (state) => {
    const drivers = driverState(state);
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
        return {
            email: driver.email,
            name: `${driver.FirstName} ${driver.LastName}`,
            birthDate: driver.BirthDate,
            contactNumber: driver.ContactNumber,
            gender: driver.Gender,
        };
    });

    return data;
}