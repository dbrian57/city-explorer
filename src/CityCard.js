import React from 'react';
import Card from 'react-bootstrap/Card';
import './CityCard.css';
import WeatherCard from './WeatherCard';

class CityCard extends React.Component {

    render(){
        let weatherCards = [];
        this.props.cityWeather.data.forEach((item, index) => {
            weatherCards.push(
                <WeatherCard
                    key={index}
                    date={item.date}
                    description={item.description}
                    />
            )
        })
        return (
            <>
                <Card className="CityCard">
                    <Card.Img variant="top" src=""></Card.Img>
                    <Card.Body>
                        <Card.Title>{this.props.cityName}</Card.Title>
                        <Card.Text>
                            <div className='coordinates'>
                                <p>Latitude: {this.props.cityLat}</p>
                                <p>Longitude: {this.props.cityLong}</p>
                            </div>
                            <div>{weatherCards}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

    export default CityCard;