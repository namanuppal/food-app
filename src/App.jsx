import React from 'react';
import Layout from './Layout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import Search from './components/Search';
import FoodDetails from './components/FoodDetails';
import RestaurantInfoDetails from './components/RestaurantInfoDetails';
import SignUp from './components/Signup';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Search />} />
          <Route path='/productDetails/:id' element={<FoodDetails/>} />
          <Route path='/restaurantInfoDetails/:id' element={<RestaurantInfoDetails/>} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
