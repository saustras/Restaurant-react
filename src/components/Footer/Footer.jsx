import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { RiSendPlaneLine } from 'react-icons/ri';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import '../../styles/footer.css';

import logo from '../../assets/images/res-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                rerum
              </p>
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00 - 20:00</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Monteria-Cordoba</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 3145961181</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>federendon26@hotmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="4" md="5" sm="7">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i>
                  <RiSendPlaneLine />
                </i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Federico Rendon
            </p>
          </Col>

          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {' '}
                <a href="https://www.facebook.com/federico.rendonbuelbas">
                  <i>
                    <AiFillFacebook />
                  </i>{' '}
                </a>
              </span>
              <span>
                <a href="https://github.com/saustras">
                  <i>
                    <AiFillGithub />
                  </i>
                </a>{' '}
              </span>
              <span>
                <a href="https://www.linkedin.com/in/federico-rendon-buelvas-b93425161/">
                  <i>
                    <AiFillLinkedin />
                  </i>
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
