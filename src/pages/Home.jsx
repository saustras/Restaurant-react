import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import Helmet from '../components/Helmet/Helmet';
import Category from '../components/UI/category/Category';
import ProductCard from '../components/UI/product-card/ProductCard';
import TestimonialSlide from '../components/UI/slide/TestimonialSlide';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsShieldCheck } from 'react-icons/bs';
import { AiOutlineCar, AiOutlineCheckCircle } from 'react-icons/ai';

import heroimg from '../assets/images/hero.png';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';

import products from '../assets/fake-data/products';

import foodCategoryimg01 from '../assets/images/hamburger.png';
import foodCategoryimg02 from '../assets/images/pizza.png';
import foodCategoryimg03 from '../assets/images/bread.png';

import whyimg from '../assets/images/location.png';
import networkimg from '../assets/images/network.png';

import '../styles/home.css';
import '../styles/hero-section.css';

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, asperiores!',
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, asperiores!',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, asperiores!',
  },
];

const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allproducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filterPizza = products.filter(
      product => product.category === 'Pizza'
    );
    const slicePizza = filterPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'BURGER') {
      const filteredProducts = products.filter(
        product => product.category === 'Burger'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter(
        product => product.category === 'Pizza'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter(
        product => product.category === 'Bread'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait food at <span>your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur leo est, feugiat nec elementum id, suscipit id
                  nulla. Nulla sit amet luctus dolor.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now{' '}
                    <i>
                      <MdKeyboardArrowRight />
                    </i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/"> See all foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i>
                        <AiOutlineCar />
                      </i>
                    </span>
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i>
                        <BsShieldCheck />
                      </i>
                    </span>{' '}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroimg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span> take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, asperiores!
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, sit.{' '}
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col key={index} lg="4" md="6" className="mt-5 ">
                <div className="feature__item text-center p-4">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-5"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="feature__text">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__cartegory d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all_btn ${
                    category === 'ALL' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('ALL')}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BURGER' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('BURGER')}
                >
                  <img src={foodCategoryimg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'PIZZA' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('PIZZA')}
                >
                  <img src={foodCategoryimg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BREAD' ? 'foodBtnActive' : ''
                  }`}
                  onClick={() => setCategory('BREAD')}
                >
                  <img src={foodCategoryimg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allproducts.map(item => (
              <Col key={item.id} lg="3" md="4" sm="6" xs="6" className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container className="wy__choise-us">
          <Row>
            <Col lg="6" md="6">
              <img src={whyimg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur, porro sint, consectetur nam sapiente laboriosam,
                  laudantium ducimus sed earum sit corporis alias nostrum
                  maxime. Placeat eum et consectetur ab dolorem!
                </p>
                <ListGroup>
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" chose__us-title d-flex align-items-center gap-2 ">
                      <i>
                        <AiOutlineCheckCircle />
                      </i>{' '}
                      Fresh and tasty foods
                    </p>

                    <p className="chose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dicta, cum!
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" chose__us-title d-flex align-items-center gap-2 ">
                      <i>
                        <AiOutlineCheckCircle />
                      </i>{' '}
                      Quality support
                    </p>

                    <p className="chose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quas, animi.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="chose__us-title d-flex align-items-center gap-2 ">
                      <i>
                        <AiOutlineCheckCircle />
                      </i>{' '}
                      Order from any location
                    </p>

                    <p className="chose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quas, animi.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map(item => (
              <Col key={item.id} lg="3" md="6" sm="6" xs="6">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>Customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit sed cumque harum magnam vitae laboriosam esse quasi
                  tempore maiores obcaecati!
                </p>
                <TestimonialSlide />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img src={networkimg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
