import { Container, Row, Col } from 'reactstrap';

import categoryImg01 from '../../../assets/images/category-01.png';
import categoryImg02 from '../../../assets/images/category-02.png';
import categoryImg03 from '../../../assets/images/category-03.png';
import categoryImg04 from '../../../assets/images/category-04.png';

import '../../../styles/category.css';

const categoryData = [
  {
    display: 'Fastfood',
    imgurl: categoryImg01,
  },
  {
    display: 'Pizza',
    imgurl: categoryImg02,
  },
  {
    display: 'Asian Food',
    imgurl: categoryImg03,
  },
  {
    display: 'Row Meat',
    imgurl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col key={index} lg="3" md="6" sm="6" xs="6" className="mb-4">
            <div className="category__item d-flex align-items-center gap-3 ">
              <div className="category__img">
                <img src={item.imgurl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
