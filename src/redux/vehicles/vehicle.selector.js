const vehicleState = store => store.vehicleStore.vehicles;

export const getVehicleTableData = (state) => {
    const vehicles = vehicleState(state);

    const data = vehicles.filter(vehicle => vehicle.deleted === false).map((vehicle) => {
        return {
            original: vehicle,
            id: vehicle.Id,
            plateNumber: vehicle.PlateNumber,
            isActive: vehicle.deleted ? 'inactive': 'active',
        };
    });
    return data;
};


export const getVehicleTableDataInctive = (state) => {
    const vehicles = vehicleState(state);

    const data = vehicles.filter(vehicle => vehicle.deleted).map((vehicle) => {
        return {
            original: vehicle,
            id: vehicle.Id,
            plateNumber: vehicle.PlateNumber,
            isActive: vehicle.deleted ? 'inactive': 'active',
        };
    });
    return data;
};