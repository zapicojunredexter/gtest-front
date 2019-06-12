import React from 'react';
import Modal from 'simple-react-modal';

class Component extends React.PureComponent<> {
    static defaultProps = {
        modalWidth: '80%',
    };
    render() {
        return (
            <Modal
                show={this.props.isOpen}
                onClose={this.props.onClose}
                containerStyle={{width: this.props.modalWidth}}
                style={{zIndex: 1000}}
            >
                {this.props.children}
            </Modal>
        );
    }
}

export default Component;
