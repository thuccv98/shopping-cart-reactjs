import { createContext } from 'react';
import faker from 'faker';
import { useReducer } from 'react';
import { cartReducer, productReducer } from './Reducers';
import { useContext } from 'react';

// Create context
const CartContext = createContext();
faker.seed(99);

// Create provider to wrap the whole app
const ContextProvider = ({ children }) => {
  const initialState1 = {
    products: [...Array(24)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    })),
    cart: [],
  };

  const initialState2 = {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
  };

  // useReducer for add, remove and change cart quantity
  const [state, dispatch] = useReducer(cartReducer, initialState1);

  // useReducer for filter switchs
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState2
  );

  // In the contextProvider, return the Provider component with a prop value and dispatch from useReducer
  return (
    <CartContext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;

// với bất lỳ component nào muốn sử dụng, để lấy được dữ liệu trong context ta sử dung useContext
// export useContext này để tiện sài ở các component con mà cần đến data
export const CartState = () => {
  return useContext(CartContext);
};
