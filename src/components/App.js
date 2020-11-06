import React from "react";
import Search from "./Search";
import ImageListing from "./ImageListing";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
class App extends React.Component {
  state = {
    fetchImages: [],
  };
  searchSubmit = async (searchText) => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=w-5wNHJjobRbLWANHsTYjDS2xLkETEQf-iJHxLT7djE",
      {
        params: {
          query: searchText,
          orientation: "portrait",
        },
      }
    );
    console.log("Response we get", response.data);
    this.setState({
      fetchImages: response.data,
    });
    console.log("Fetch data from api");
  };
  render() {
    console.log("Working with Api integration");
    return (
      <div className="App">
        <Container>
          <Search searchImages={this.searchSubmit} />
          <ImageListing renderImagesList={this.state.fetchImages} />
        </Container>
      </div>
    );
  }
}
export default App;
