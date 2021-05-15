import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap';
import Homescreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegsiterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'

function App() {
  return (
    <Router>
      <Header/>
      <main>

      <Container className="py-3">
          <Route path="/shipping" component={ShippingScreen}/>
          <Route path="/login" component={LoginScreen}/>
          <Route path="/register" component={RegsiterScreen}/>
          <Route path="/profile" component={ProfileScreen}/>          
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path="/" component={Homescreen} exact/>
       </Container>
      
      </main> 
      <Footer/>
    </Router>
  );
}

export default App;