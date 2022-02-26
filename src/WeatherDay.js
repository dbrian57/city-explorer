import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './WeatherDay.css';

class WeatherDay extends React.Component {

    render(){
        return (
            <>
              <ListGroup className="weatherDay">
                <ListGroup.Item className="weatherDate">{this.props.date}</ListGroup.Item>
                <ListGroup.Item className="weatherDesc">{this.props.description}</ListGroup.Item>
              </ListGroup>
                  
                  
            </>
        )
    }
}

export default WeatherDay;