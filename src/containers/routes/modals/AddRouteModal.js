import React from 'react';
import Modal from '../../../components/modal';

import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

// ES5

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiemFwaWNvanVucmVkZXh0ZXIiLCJhIjoiY2p0aDlsZHN5MG5xaDN5cDhtbGdrN3hkeSJ9.UOC5ygISBssSgsyXp7rruQ"
});


const center = [123.903557, 10.299158];
const zoom = [15];

class ModalComponent extends React.PureComponent<> {
    state = {
        fromLat: null,
        fromLng: null,
        toLat: null,
        toLng: null,
        routeName: '',
    }

    handleAddRoute = () => {
        this.props.onSubmit(this.state);
    }

    handleOnClick = (event, {lngLat}) => {
        const { lng, lat } = lngLat;
        if (!this.state.fromLat && !this.state.fromLng) {
            this.setState({
                fromLat: lat,
                fromLng: lng,
            })
        }else if(!this.state.toLat && !this.state.toLng){
            this.setState({
                toLat: lat,
                toLng: lng,
            })
        } else {
            this.setState({
                fromLat: lat,
                fromLng: lng,
                toLat: null,
                toLng: null,
            })
        }
    }

    render() {
        return (
            <Modal modalWidth="60%" isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: 500,
                        width: "80%",
                        marginLeft: "10%",
                        marginRight: "10%",
                    }}
                    zoom={zoom}
                    center={center}
                    onClick={this.handleOnClick}
                >

                    {this.state.fromLat && this.state.fromLng && (
                        <Marker
                            coordinates={[this.state.fromLng, this.state.fromLat]}
                            anchor="bottom">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_280333.png" style={{width: 20}}/>
                        </Marker>
                        // <Layer
                        //     type="circle"
                        //     id="marker"
                        //     paint={{
                        //     "circle-color": "#336699",
                        //     "circle-stroke-width": 1,
                        //     "circle-stroke-color": "#fff",
                        //     "circle-stroke-opacity": 1
                        //     }}
                        // >
                        //     <Feature coordinates={[this.state.fromLng, this.state.fromLat]} />
                        //     <Feature coordinates={[this.state.fromLng, this.state.fromLat]} />
                        // </Layer>
                    )}
                    {this.state.toLat && this.state.toLng && (
                        <Marker
                            coordinates={[this.state.toLng, this.state.toLat]}
                            anchor="bottom">
                            <img src="http://cdn.onlinewebfonts.com/svg/img_280333.png" style={{width: 20}}/>
                        </Marker>
                        // <Layer
                        //     type="circle"
                        //     id="marker-2"
                        //     paint={{
                        //     "circle-color": "#336699",
                        //     "circle-stroke-width": 1,
                        //     "circle-stroke-color": "#fff",
                        //     "circle-stroke-opacity": 1
                        //     }}
                        // >
                        //     <Feature coordinates={[this.state.toLng, this.state.toLat]} />
                        //     <Feature coordinates={[this.state.toLng, this.state.toLat]} />
                        // </Layer>
                    )}
                </Map>
                {/*
                <br /><input readonly placeholder="from lng" type="text" value={this.state.fromLng} onChange={event => this.setState({ fromLng: event.target.value})} />
                <br /><input readonly placeholder="from lat" type="text" value={this.state.fromLat} onChange={event => this.setState({ fromLat: event.target.value})} />
                <br /><input readonly placeholder="to lat" type="text" value={this.state.toLat} onChange={event => this.setState({ toLat: event.target.value})} />
                <br /><input readonly placeholder="to lng" type="text" value={this.state.toLng} onChange={event => this.setState({ toLng: event.target.value})} />
                */}
                
                <br /><input placeholder="route name" type="text" value={this.state.routeName} onChange={event => this.setState({ routeName: event.target.value})} />
                <br /><button onClick={this.handleAddRoute}>SUBMIT</button>
                {/*
                
                <ul>
                    {this.props.routes.map(route => <li>{JSON.stringify(route)}</li>)}
                </ul>
                */}
                
            </Modal>
        );
    }
}

export default ModalComponent;
