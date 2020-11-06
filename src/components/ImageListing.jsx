import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ImageListing = (props) => {
  const getApiImages = props.renderImagesList.map((image) => {
    return (
      <Col xs={12} md={4}>
        <img src={image.urls.small} key={image.id} />
      </Col>
    );
  });

  return (
    <>
      <Row>{getApiImages}</Row>
    </>
  );
};
export default ImageListing;
