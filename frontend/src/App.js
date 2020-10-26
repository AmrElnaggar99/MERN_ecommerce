import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductScreen from './screens/ProductScreen'
import { Container } from 'react-bootstrap'
import './bootstrap.min.css'
import HomeScreen from './screens/HomeScreen'
import cartScreen from './screens/cartScreen'
import loginScreen from './screens/LoginScreen'
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={loginScreen} />
          <Route path='/products/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={cartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
