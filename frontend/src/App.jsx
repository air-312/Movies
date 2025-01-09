import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';
import Login from './assets/pages/login/Login'
import Register from './assets/pages/register/Register'
import NotFound from './assets/pages/not_found/404'
import Catalogue from './assets/pages/catalogue/Catalogue'
import MovieList from './assets/pages/moviesList/MovieList'

import Home from './assets/pages/home/Home';

function App() {
 
  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route index element={<Home /> } />
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register />} />
              <Route path='/catalogue' element={<Catalogue />}/>
              <Route path="/movie/:id" element={<MovieList />} />
              <Route path='*' element={<NotFound/>} />
          </Routes>
        <Footer/>
        </Router>
     
    </>
  );
}

export default App;
