import React from 'react';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';

class MovieCard extends React.Component {
    render(){
        return (
            <>
                <Card className="MovieCard">
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <div className="movieDate">Release Date: {this.props.release_date}</div>
                            <div className="movieDesc">{this.props.overview}</div> 
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default MovieCard;