import React from 'react';
import ReactTable, { ReactTableDefaults } from 'react-table';
import 'react-table/react-table.css';
import "./styles.scss";

// Object.assign(ReactTableDefaults, {
//   LoadingComponent: () => <span style={{position:'absolute',top: 0,left: 0,right: 0,bottom: 0,backgroundColor: 'black',display: 'flex',alignItems:'center',justifyContent: 'center',zIndex:  10,opacity: 0.8}}>AYAYAYYAY</span>,
// })
class Component extends React.PureComponent<> {
    render() {
        return (
            <div className="react-table-wrapper">
                <ReactTable
                    defaultPageSize={10}
                    loadingText="Fetching..."
                    {...this.props}
                    data={this.props.data}
                    columns={this.props.columns}
                />
            </div>
        );
    }
}

export default Component;
