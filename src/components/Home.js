import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';
import './styles.css';

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((item) => {
          return <SingleProduct item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
