import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Utilisation de BrowserRouter au lieu de Router

import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';

import Home from './assets/pages/home/Home';
import Login from './assets/pages/login/Login';
import Register from './assets/pages/register/Register'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<>
            <Header />
            <Home />
            <Footer />
          </>} /> 
          <Route path='/login' element={<Login/>} /> 
          <Route path='/register' element={<Register/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
