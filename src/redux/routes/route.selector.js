const routeState = store => store.routeStore.routes;

export const getRouteTableData = (state) => {
    const routes = routeState(state);
    const data = routes.map(route => {
        return {
            route: route.Route,
            location1: `${route.FromLocation[0]},${route.FromLocation[1]}`,
            location2: `${route.ToLocation[0]},${route.ToLocation[1]}`,
        };
    });

    return data;
}