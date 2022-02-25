import React from 'react';
import Card from 'react-bootstrap/Card';
import './CityCard.css';
import WeatherCard from './WeatherCard';
import MovieCard from './MovieCard';

class CityCard extends React.Component {

    render() {

        let weatherCards = this.props.cityWeather.map((item, index) => (
          <WeatherCard
            key={index}
            date={item.date}
            description={item.description}
          />
            )
        )

        let movieCards = this.props.cityMovies.map((item, index) => (
          <MovieCard
            key={index}
            title={item.title}
            release_date={item.release_date}
            overview={item.overview}
          />
            )
        )
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
                      <div>{weatherCards}</div>
                      <hr></hr>
                      Movies about this city
                      <div>{movieCards}</div>
                  </Card.Body>
              </Card>
            </>
        )
    }
}

export default CityCard;