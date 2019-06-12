import React from 'react';
import "./styles.scss";
class Component extends React.PureComponent<> {
    render() {
        return (
            <a
                onClick={this.props.onClick}
                class={`btn btn-sm btn-${this.props.type} action-buttons`}
                data-toggle="tooltip"
                data-placement="bottom"
                title="Under Repair"
            >
                    <i class={this.props.iconClass} aria-hidden="true"></i>
            </a>
        );
    }
}

export default Component;
