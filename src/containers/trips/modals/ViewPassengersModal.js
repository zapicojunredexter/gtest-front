import React from 'react';
import Modal from '../../../components/modal';

import Table from '../../../components/tables/Basic';

class ModalComponent extends React.PureComponent<> {

    columns = [
        {
            Header: '#',
            accessor: null,
            Cell: (data) => (
                <span>
                    {data.viewIndex + 1}
                </span>
            ),
            width: 50,
            filterable: false,
        },
        {
            Header: 'BOOKING ID',
            accessor: 'id',
            width: 150,
            filterable: false,
        },
        {
            Header: 'COMMUTER',
            accessor: 'commuter',
            width: 200,
            filterable: false,
        },
        {
            Header: 'BOOKED DATE',
            accessor: 'booked',
            width: 200,
            filterable: false,
        },
        {
            Header: 'STATUS',
            accessor: 'status',
            width: 100,
            filterable: false,
            Cell: ({original}) => (this.renderStatusBadge(original.status)),
        },
        {
            Header: 'SEATS',
            accessor: 'seats',
            width: 300,
            filterable: false,
            Cell: ({original}) => (
                <span>
                    {`(${original.seats.length}) ${original.seats.join(', ')}`}
                </span>
            ),
        },
    ];

    renderStatusBadge = (status) => {
        const mapper = {
            'Waiting': {
                label: 'Waiting',
                class: 'primary',
            },
            'Travelling': {
                label: 'Travelling',
                class: 'succes',
            },
            'Cancelled': {
                label: 'Cancelled',
                class: 'danger',
            },
            'Finished': {
                label: 'Arrived',
                class: 'warning',
            },
        };
        const obj = mapper[status] || {
            label: status,
            class: 'info',
        };
        // return 'info';
        return (
            <span className={`badge btn-${obj.class}`}>
                {obj.label}
            </span>
        );
    }

    render() {
        const { viewBookings } = this.props;
        if(!viewBookings)
        return null;
        const {bookings} = viewBookings;
        return (
            <Modal modalWidth="60%" isOpen={!!viewBookings} onClose={this.props.onClose}>
                <div style={{padding: 20,}}>
                <Table
                    data={bookings}
                    columns={this.columns}
                /></div>
            </Modal>
        );
    }
}

export default ModalComponent;
