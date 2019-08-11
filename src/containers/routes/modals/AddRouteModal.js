import React from 'react';
import { debounce } from 'lodash';
import Modal from '../../../components/modal';

import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

import Geocode from 'react-geocode';

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey('AIzaSyDIgLS5x_E4Myg9ov45Vrg7on56o_Ej1X0');

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
        routeName1: '',
        routeName2: '',
    }

    componentDidMount() {
        // this.reverseGeocode();
    }
    
    reverseGeocode = async  (key, { lng, lat }) => {
        const result = await this.props.reverseGeocode(lng, lat);
        const place = result && result.features && result.features[0] && result.features[0].place_name;
        this.setState({[key]: place});
    }

    handleAddRoute = debounce(() => {
        const params = {
            fromLat: this.state.fromLat,
            fromLng: this.state.fromLng,
            toLat: this.state.toLat,
            toLng: this.state.toLng,
            routeName: `${this.state.routeName1} - ${this.state.routeName2}`,
        };
        this.props.onSubmit(params);
    }, 500);

    handleOnClick = (event, {lngLat}) => {
        const { lng, lat } = lngLat;
        if (!this.state.fromLat && !this.state.fromLng) {
            this.setState({
                fromLat: lat,
                fromLng: lng,
            });
            this.reverseGeocode('routeName1', lngLat);
        }else if(!this.state.toLat && !this.state.toLng){
            this.setState({
                toLat: lat,
                toLng: lng,
            });

            this.reverseGeocode('routeName2', lngLat);
        } else {
            this.setState({
                fromLat: lat,
                fromLng: lng,
                toLat: null,
                toLng: null,
            });
            this.reverseGeocode('routeName1', lngLat);
        }
    }

    render() {
        console.log('nagrerender', this.state);
        return (
            <Modal modalWidth="60%" isOpen={this.props.isOpen} onClose={this.props.onClose}>
                <div class="form-group fg-route-modal">
                    <h1>Add a Route</h1>
                    <hr></hr>
                    <div class="row">
                        <div class="col-md-12" style={{padding: 20}}>
                            <p>Route Name:</p>
                            <div className="row">
                                <input style={{flex:1}} placeholder="From" className="form-control" type="text" value={this.state.routeName1} onChange={event => this.setState({ routeName1: event.target.value})} />
                                <div style={{textAlign:'center', paddingLeft:10, paddingRight:10}}>{` - `}</div>
                                <input style={{flex:1}} placeholder="To" className="form-control" type="text" value={this.state.routeName2} onChange={event => this.setState({ routeName2: event.target.value})} />
                                {/*
                                <input placeholder="Route Name" className="form-control col-sm-12" type="text" value={this.state.routeName} onChange={event => this.setState({ routeName: event.target.value})} />
                                */}
                                
                            </div>
                        </div>
                    </div><br/>
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
                    <div class="d-flex justify-content-end">
                     <button onClick={this.handleAddRoute} class="btn btn-md btn-primary addbtn-modal">SUBMIT</button>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ModalComponent;
