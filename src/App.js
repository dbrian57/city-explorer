import React from 'react';
import './App.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CityCard from './CityCard'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      cityName: null,
      cityLat: null,
      cityLong: null,
      cityState: false,
      cityWeather: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.sendRequest();
    this.getWeatherData();
  }

  sendRequest = async () => {
    let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    this.setState({
      cityData: locationData,
      cityName: locationData.data[0].display_name,
      cityLat: locationData.data[0].lat,
      cityLong: locationData.data[0].lon,
      cityState: true
    });
    }

    getWeatherData = async () => {
      let weatherData = await axios.get(`http://localhost:3001/weather?searchQuery=${this.state.city}&lat=${this.state.cityLat}&lon=${this.state.cityLong}`);
      this.setState({
        cityWeather: weatherData
      })
    }

  updateCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  render(){ 

    if (this.state.cityState) {
      return  <CityCard cityName={this.state.cityName} cityLong={this.state.cityLong} cityLat={this.state.cityLat} cityWeather={this.state.cityWeather} />;
     };

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
            <Form.Label>Enter a city to search for: </Form.Label>
            <Form.Control onChange={this.updateCity} type="text" placeholder="Enter city" />
            <Button type="submit">Explore City</Button>
        </Form>
      </>
      );
    };
}

export default App;
