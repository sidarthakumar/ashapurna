import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import CarouselItem1 from "../../images/27_years_banner.jpeg";
import CarouselItem2 from "../../images/aangan_we_banner_amenities.jpeg";
import CarouselItem3 from "../../images/anmol_web_banner.jpeg";
import CarouselItem4 from "../../images/basera_web_banner.jpeg";
import CarouselItem5 from "../../images/heritage_we_banner_03.jpeg";
import CarouselItem6 from "../../images/mb_web_banner.jpeg";
import CarouselItem7 from "../../images/nri_web_banner.jpeg";
import CarouselItem8 from "../../images/township-under-construction-in-jodhpur-ashapurna-anmol.webp";
import CarouselItem9 from "../../images/villa-at-prime-location-at-ashapurna-anmol.webp";
import "./Carousels.css";

let Carousels = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
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
            <Slider {...settings} className="carouselSlider">
              <div>
                <img src={CarouselItem1} className="carouselItem" alt="" />
              </div>
              <div>
                <img src={CarouselItem2} className="carouselItem" alt="" />
              </div>
              <div>
                <img src={CarouselItem3} className="carouselItem" alt="" />
              </div>
              <div>
                <img src={CarouselItem4} className="carouselItem" alt="" />
              </div>
              <div>
                <img src={CarouselItem5} className="carouselItem" alt="" />
              </div>
              <div>
                <img src={CarouselItem6} className="carouselItem" alt="" />
              </div>
              <div>
                <img src={CarouselItem7} className="carouselItem" alt="" />
              </div>
              <div>
                <img src={CarouselItem8} className="carouselItem" alt="" />
              </div>
              <div>
                <img src={CarouselItem9} className="carouselItem" alt="" />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Carousels;
