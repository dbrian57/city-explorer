import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {}
    }
  }

handleSubmit = async (event) => {
  event.preventDefault();
  this.setState({
    city: event.target.value
  })
   let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=boston&format=json`);

   this.setState({
     cityData: locationData
   })
   console.log(this.state.cityData.data[0].display_name);
  }

  render(){ 

    return (
      <>
        <form>
          <label>Enter a city: 
            <input type="text" />
          </label>
          <button type="submit" onClick={this.handleSubmit}>Explore!</button>
        </form>
      </>
      );
    }
}

export default App;
