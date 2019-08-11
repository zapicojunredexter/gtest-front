

import { responseToJson } from '../utils/parsing.helpers';

export default class Service {
    static reverseGeoCode = (lng, lat) => async dispatch => {
        try {
            const result = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1IjoiemFwaWNvanVucmVkZXh0ZXIiLCJhIjoiY2p0aDlsZHN5MG5xaDN5cDhtbGdrN3hkeSJ9.UOC5ygISBssSgsyXp7rruQ`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const json = await responseToJson(result);
            return json;
        } catch (err) {
            console.error(err);
        }
    }

};