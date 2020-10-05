import { Col, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  // Use State --> Allows to use state in a function component
  // Not needed with Redux
  // const [products, setProducts] = useState([]);

  // React Hook --> Do something after render
  // API request done through Redux now
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     // response.data
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  // React Hook --> Do something after render
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} m={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
