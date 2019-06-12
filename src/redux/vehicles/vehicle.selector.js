const vehicleState = store => store.vehicleStore.vehicles;

export const getVehicleTableData = (state) => {
    const vehicles = vehicleState(state);

    const data = vehicles.map((vehicle) => {
        return {
            id: vehicle.Id,
            plateNumber: vehicle.PlateNumber,
            isActive: vehicle.deleted ? 'inactive': 'active',
        };
    });

    return data;
}