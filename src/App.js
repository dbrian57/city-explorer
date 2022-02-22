import React from 'react';
import './App.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      cityName: null,
      cityLat: null,
      cityLong: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.sendRequest();
  }

  sendRequest = async () => {
    let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    console.log(locationData);
    this.setState({
      cityData: locationData,
      cityName: locationData.data[0].display_name,
      cityLat: locationData.data[0].lat,
      cityLong: locationData.data[0].lon
    });
    }

  updateCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  render(){ 
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
            <Form.Label>Enter a city to search for: </Form.Label>
            <Form.Control onChange={this.updateCity} type="text" placeholder="Enter city" />
            <Button type="submit">Explore City</Button>
        </Form>

        <p>{this.state.cityName}</p>
        <p>{this.state.cityLong}</p>
        <p>{this.state.cityLat}</p>
      </>
      );
    }
}

export default App;
