import { Button, Card } from 'react-bootstrap';
import Rating from './Rating';

const SingleProduct = ({ item }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={item.image} alt={item.name} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {item.price.split('.')[0]}</span>
            {item.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={item.ratings} />
          </Card.Subtitle>
          <Button variant="danger">Remove from cart</Button>
          <Button disabled={!item.inStock}>
            {!item.inStock ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
