const tripState = store => store.vehicleStore.vehicles;

export const getTripTableData = (state) => {
    const data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      },{
        name: 'Tanner Linsley 2',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
    }];

    return data;
}