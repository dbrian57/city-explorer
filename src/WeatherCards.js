import React from 'react';
import Card from 'react-bootstrap/Card';
import WeatherDay from './WeatherDay';
import './WeatherDay.css';

class WeatherCards extends React.Component {

    render(){

      let weatherDay = this.props.cityWeather.map((item, index) => (
        <WeatherDay
          key={index}
          date={item.date}
          description={item.description}
        />
          )
      )

        return (
            <>
              <Card className="WeatherCard">
              <Card.Body>
                {weatherDay}
              </Card.Body>
              </Card>
            </>
        )
    }
}

export default WeatherCards;