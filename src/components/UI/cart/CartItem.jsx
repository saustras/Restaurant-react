import { ListGroupItem } from 'reactstrap';
import { AiOutlineClose, AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';

import PropTypes from 'prop-types';

import '../../../styles/cart-item.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({ product }) => {
  const { title, price, id, quantity, image01, totalPrice } = product;

  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  const decrementQuantity = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <ListGroupItem className=" list__item border-0 ">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity} <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center  justify-content-between increase__decrease-btn">
              <span className="ingrese__btn" onClick={incrementQuantity}>
                <i>
                  <AiOutlinePlus />
                </i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decrementQuantity}>
                <i>
                  <AiOutlineLine />
                </i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i>
              <AiOutlineClose />
            </i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItem;
