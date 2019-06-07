import React from 'react';
import { connect } from 'react-redux';
import CommuterService from '../../redux/commuters/commuter.service';

class Container extends React.PureComponent<> {
    componentDidMount(){
        this.props.fetchCommuters();
    }
    render() {
        return (
            <div>
                src/containers/commuters/index.js


                <br /><br /><br /><br /><br /><br />
                <ul>
                    {this.props.commuters.map(data => <li>{JSON.stringify(data)}</li>)}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    commuters: state.commuterStore.commuters,
});

const mapDispatchToProps = dispatch => ({
    fetchCommuters: () => dispatch(CommuterService.fetchCommuters()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
