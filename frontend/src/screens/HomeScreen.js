import { Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  // Use State --> Allows to use state in a function component
  const [products, setProducts] = useState([]);

  // React Hook --> Do something after render
  useEffect(() => {
    const fetchProducts = async () => {
      // response.data
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} m={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
