import React from 'react';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
// import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
// import { geolocated } from "react-geolocated";
// import ReactDOM from "react-dom";

const defaultMapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  zoomControl: false,
};

function Map() {
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{ lat: 60.192059, lng: 24.945831 }}
			defaultOptions={defaultMapOptions}
		/>
		);
};

const MainScreenMap = withScriptjs(withGoogleMap(Map));

export default function App() {
	return (
		<div style={{width: '100vw', height: '100vh'}}>
			<MainScreenMap
  				googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing&key=AIzaSyAIcTSkJY2iEQkg4Llb6SSuMngPVbQShYQ'}
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `100%` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
  			/>
  		</div>
		);
};