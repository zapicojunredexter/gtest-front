import React from 'react';
import "./styles.scss";
/*
    <ActionButton
        type="primary"
        iconClass="pe-7s-map"
        onClick={() => alert(JSON.stringify(original))}
    />
    <ActionButton
        type="info"
        iconClass="fa fa-pencil"
        onClick={() => alert(JSON.stringify(original))}
    />
    <ActionButton
        type="danger"
        iconClass="fa fa-ban"
        onClick={() => alert(JSON.stringify(original))}
    />
*/
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
