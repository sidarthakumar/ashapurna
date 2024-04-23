import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import CarouselItem1 from "../../images/27_years_banner.jpeg";
import "./Carousels.css";

let Carousels = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container fluid>
      <Container className="mainContainer">
        <Row>
          <Col>
            {/* <Container> */}
              <Slider {...settings} className="carouselSlider">
                <div>
                  <img src={CarouselItem1} className="carouselItem" alt="" />
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            {/* </Container> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Carousels;
