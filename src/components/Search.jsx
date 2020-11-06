import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
class Search extends React.Component {
  state = {
    searchText: "",
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchImages(this.state.searchText);
    this.setState({
      searchText: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Search Images"
            style={{ marginTop: "25px" }}
            onChange={this.handleChange}
            value={this.state.searchText}
          />
        </Form.Group>
      </Form>
    );
  }
}
export default Search;
