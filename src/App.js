import React from 'react';
import './App.css';
import axios from 'axios';
import CityCard from './CityCard'
import SearchBar from './SearchBar';

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
      cityWeather: [],
      weatherError: false,
      weatherErrorMessage: '',
      cityMovies: []
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
      this.setState({
        cityData: locationData,
        cityName: locationData.data[0].display_name,
        cityLat: locationData.data[0].lat,
        cityLong: locationData.data[0].lon,
        cityState: true
      });

      } catch (err) {
        console.error(err);
      }
      this.getWeatherData();
      this.getMovieData();
    }


  sendRequest = async () => {
    let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    
    this.setState({
      cityData: locationData,
      cityName: locationData.data[0].display_name,
      cityLat: locationData.data[0].lat,
      cityLong: locationData.data[0].lon,
      cityState: true,
    });
    }

  getWeatherData = async () => {
    let weatherData = await axios.get(`${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}&lat=${this.state.cityLat}&lon=${this.state.cityLong}`);
   
    this.setState({
      cityWeather: weatherData.data
    })
  }

  getMovieData = async () => {
    let movieData = await axios.get(`${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.city}`);
    
    this.setState({
      cityMovies: movieData.data
    })
  }

  updateCity = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  render(){ 
    let urlMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLong}&zoom=10`

    return (
      <>
        <div className='container'>
          <div className='siteTitle'>City Explorer</div>

          <SearchBar 
            handleSubmit={this.handleSubmit} 
            updateCity={this.updateCity}
          />
          
          <CityCard 
            cityName={this.state.cityName} 
            cityLong={this.state.cityLong} 
            cityLat={this.state.cityLat} 
            cityWeather={this.state.cityWeather} 
            cityMovies={this.state.cityMovies} 
            cityMap={this.state.cityMap}
            urlMap={urlMap}
            cityState={this.state.cityState} />
        </div>
      </>
      );
    };
}

export default App;
