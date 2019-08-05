import React, { Component } from 'react';
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import apiConfig from './apikeys.js';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 60.1733244,
         lng: 24.9410248
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
apiKey: apiConfig.googleApiKey
})(MapContainer);