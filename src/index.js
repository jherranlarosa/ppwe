import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import BackGroundMap from './Map';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false
    }
  }

  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);
          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            isMarkerShown: true
          }))
        }
      )
    } else {
        return console.log('Vituiksmän');
    }
  }


  componentDidMount() {
    this.showCurrentLocation()
  }

  render() {
    return (
      <div>
        <BackGroundMap
          currentLocation={this.state.currentLatLng} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
