import React from 'react';
import Card from 'react-bootstrap/Card';
import './CityCard.css';
import WeatherCards from './WeatherCards';
import MovieCards from './MovieCards';

class CityCard extends React.Component {

    render() {

        return (
            <>
              <Card className="CityCard">
                  <Card.Img variant="top" src={this.props.urlMap} className="map" alt="map of the city"></Card.Img>
                  <Card.Body>
                  <Card.Title>{this.props.cityName}</Card.Title>
                      <div className='coordinates'>
                      <p>Latitude: {this.props.cityLat}</p>
                      <p>Longitude: {this.props.cityLong}</p>
                      <hr></hr>
                      </div>
                      <div className="forcast">Weather Forcast</div>
                      <WeatherCards  cityWeather={this.props.cityWeather} />
                      <hr></hr>
                      Movies about this city
                      <MovieCards cityMovies={this.props.cityMovies} />
                  </Card.Body>
              </Card>
            </>
        )
    }
}

export default CityCard;