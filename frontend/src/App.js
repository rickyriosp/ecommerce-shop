import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import React from 'react';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome To ProShop</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
