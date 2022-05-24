import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path ='*' element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
