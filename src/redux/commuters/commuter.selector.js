const commuterState = store => store.commuterStore.commuters;

export const getCommutersTableData = state => {
    const commuters = commuterState(state);
    const data = commuters.map(commuter => {
        return {
            original: commuter,
            id: commuter.Id,
            email: commuter.email,
            name: `${commuter.FirstName} ${commuter.LastName}`,
            birthDate: commuter.BirthDate,
            contactNumber: commuter.ContactNumber,
            gender: commuter.Gender,
            points: commuter.WalletBalance,
        };
    });
    return data;
}