import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './MovieCard.css';

class MovieCard extends React.Component {
    render() {
        return (
          <>
          <ListGroup className="movieCard">
            <ListGroup.Item className="movieTitle">{this.props.title}</ListGroup.Item>
            <ListGroup.Item className="movieDate">Release Date: {this.props.release_date}</ListGroup.Item>
            <ListGroup.Item className="movieDesc">{this.props.overview}</ListGroup.Item>
          </ListGroup>
          </>
        )
    }
}

export default MovieCard;