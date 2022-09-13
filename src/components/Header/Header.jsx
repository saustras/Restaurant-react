import { useEffect, useRef } from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/shopping-cart/carUiSlice';
import {
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineShopping,
} from 'react-icons/ai';

import '../../styles/header.css';

const Header = () => {
  const navbarRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    navbarRef.current.classList.toggle('show__menu');
  };

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header__shrink');
      }
      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navi__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          {/* =========== mennu ============= */}
          <div
            className="navigation"
            ref={navbarRef}
            onClick={toggleMenu}
          ></div>
          {/* =========== nav right icons ============= */}
          <div className="nav-right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i>
                <AiOutlineShopping />
              </i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i>
                <AiOutlineMenu />
              </i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

// propTypes

export default Header;
