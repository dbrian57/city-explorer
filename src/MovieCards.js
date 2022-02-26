import React from 'react';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';
import MovieCard from './MovieCard'

class MovieCards extends React.Component {
    render() {

      let movieCard = this.props.cityMovies.map((item, index) => (
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
            <Card className="MovieCard">
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                 {movieCard}
              </Card.Body>
            </Card>
          </>
        )
    }
}

export default MovieCards;