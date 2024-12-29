import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Utilisation de BrowserRouter au lieu de Router

import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';

import Home from './assets/pages/home/Home';
import Login from './assets/pages/login/Login';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>} /> 
          <Route path='/login' element={<Login/>} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
