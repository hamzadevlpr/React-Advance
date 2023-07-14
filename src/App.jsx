import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Products from '../src/Products';
import ProductDetail from '../src/ProductDetail';
import Cart from '../src/Cart';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartProvider } from './CartContext'
import BreadCrumbs from './BreadCrumbs';
import Home from './Home';
import Signup from './Sigup';
import { useLocation } from 'react-router-dom';
import Login from './Login';
import Categories from './Categories';
import News from './News';
import DatePicker from './DatePicker';
import Filter from './Filter';
import Portfolio from './Portfolio/Portfolio';
import CountryList from './Portfolio/CountriesList/CountryList';
import CountryDetail from './Portfolio/CountriesList/CountryDetail';
import axios from 'axios';
import CountryData from './Portfolio/CountriesList/CountryData';


function App() {

  const location = useLocation();

  return (

    <>

      <CartProvider>
        <Navbar />
        {location.pathname === '/signup' || location.pathname === '/login' ? '' : <BreadCrumbs />}
        <Routes>
          <Route path='/date-picker' element={<DatePicker />} />
          <Route path='/country' element={<CountryList />} />
          <Route path='/country/:CountryName' element={<CountryDetail />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/product' element={<Products />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/news' element={<News />} />
          <Route path='/countrydata' element={<CountryData />} />
        </Routes>



        <Footer />
      </CartProvider>
    </>
  )
}

export default App;