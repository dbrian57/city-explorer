import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component {
  render() {
    return(
      <>
        <Form className="cityForm" onSubmit={this.props.handleSubmit}>
          <Form.Label>Enter a city to search for: </Form.Label>
          <Form.Control onChange={this.props.updateCity} type="text" placeholder="Example: Seattle" />
          <Button type="submit">Explore City</Button>
        </Form>
      </>
    )
  }
}
export default SearchBar;