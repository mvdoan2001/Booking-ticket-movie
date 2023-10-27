import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Carousel from './templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import Detail from './pages/Detail/Detail';
// import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Loading from './components/Loading/Loading';
import Profile from './pages/Profile/Profile'
const CheckoutTemplate = React.lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'));


function App() {

  return (
    <BrowserRouter>

      <Loading />

      <Routes>

        <Route path='/' element={<HomeTemplate>
          {<Carousel />}
          {<Home />}
        </HomeTemplate>} />
        <Route path='/contact' element={<HomeTemplate>
          {<Carousel />}
          {<Contact />}
        </HomeTemplate>} />
        <Route path='/news' element={<HomeTemplate>
          {<Carousel />}
          {<News />}
        </HomeTemplate>} />
        <Route path='/detail/:id' element={<HomeTemplate>
          {<Detail />}
        </HomeTemplate>} />


        <Route path='/checkout/:id' element={<React.Suspense fallback={<h1><Loading /></h1>}>
          <CheckoutTemplate>
            {<Checkout />}
          </CheckoutTemplate>
        </React.Suspense>} />

        <Route index path='register' element={<UserTemplate >
          <Register />
        </UserTemplate>} />
        <Route path='/login' element={<UserTemplate >
          <Login />
        </UserTemplate>} />

        <Route path='/profile' element= {<Profile />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;


