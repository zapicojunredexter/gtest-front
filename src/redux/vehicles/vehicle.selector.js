const vehicleState = store => store.vehicleStore.vehicles;

export const getVehicleTableData = (state) => {
    const vehicles = vehicleState(state);

    return vehicles;
}