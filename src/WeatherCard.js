import React from 'react';
import Card from 'react-bootstrap/Card';
import './WeatherCard.css';

class WeatherCard extends React.Component {

    render(){
        return (
            <>
                <Card className="WeatherCard">
                    <Card.Body>
                        <Card.Title>{this.props.date}</Card.Title>
                            <div>{this.props.description}</div> 
                    </Card.Body>
                </Card>
            </>
        )
    }
}

    export default WeatherCard;