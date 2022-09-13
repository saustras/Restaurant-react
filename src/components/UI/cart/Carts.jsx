import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';

import CartItem from './CartItem';

import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../../store/shopping-cart/carUiSlice';

import '../../../styles/shopping-cart.css';

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close" onClick={toggleCart}>
          <span>
            <i>
              <AiFillCloseCircle />
            </i>
          </span>
        </div>

        <div className="cart__item-list py-3">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5"> No item added to the cart</h6>
          ) : (
            cartProducts.map(product => (
              <CartItem key={product.id} product={product} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal amount: <span>${totalAmount}</span>
          </h6>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
