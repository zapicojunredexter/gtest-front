import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import "./styles.scss";
class Component extends React.PureComponent<> {
    render() {
        return (
            <div>
                <ReactTable
                    data={this.props.data}
                    columns={this.props.columns}
                />
            </div>
        );
    }
}

export default Component;
