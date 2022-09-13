import Slider from 'react-slick';

import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';

import '../../../styles/slider.css';

function TestimonialSlide() {
  const settings = {
    dots: true,
    Infinity: true,
    autoPlay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slideToShow: 1,
    slideToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quibusdam corporis neque autem nisi! Odit veniam tenetur soluta
          temporibus praesentium, vel, voluptate minima sed necessitatibus
          accusamus fugit aliquam delectus est?&quot;
        </p>
        <div className=" slider__content d-flex aling-align-items-center gap-3">
          <img src={ava01} alt="avatar" className="rounded" />
          <h6>Julian Perez Gonzales</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quibusdam corporis neque autem nisi! Odit veniam tenetur soluta
          temporibus praesentium, vel, voluptate minima sed necessitatibus
          accusamus fugit aliquam delectus est?&quot;
        </p>
        <div className=" slider__content d-flex aling-align-items-center gap-3">
          <img src={ava02} alt="avatar" className="rounded" />
          <h6>Andrea Maria Rendon</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quibusdam corporis neque autem nisi! Odit veniam tenetur soluta
          temporibus praesentium, vel, voluptate minima sed necessitatibus
          accusamus fugit aliquam delectus est?&quot;
        </p>
        <div className="slider__content d-flex aling-align-items-center gap-3">
          <img src={ava03} alt="avatar" className="rounded" />
          <h6>Luis Paez Martines</h6>
        </div>
      </div>
    </Slider>
  );
}

export default TestimonialSlide;
