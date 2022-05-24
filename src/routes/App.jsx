import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import { useInitialState } from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState()
  const isEmpty = Object.keys(initialState.products).length
  return(
    <React.Fragment>
        {isEmpty > 0 ? (
          <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path="/checkout" component={Checkout} />
              <Route path ='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
        ) : <h1>Loading...</h1>
      }
    </React.Fragment>
    
  )
}
  

export default App;
