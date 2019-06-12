const vehicleState = store => store.vehicleStore.vehicles;

export const getVehicleTableData = (state) => {
    const vehicles = [
        {
            plateNumber: 123,
            actions: true,
        }
    ];

    return vehicles;
}