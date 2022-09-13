import Routers from '../../routes/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Carts from '../UI/cart/Carts';
import { useSelector } from 'react-redux';

const Layout = () => {
  const showCart = useSelector(state => state.cartUi.isCartOpen);

  return (
    <div>
      <Header />
      {showCart && <Carts />}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
