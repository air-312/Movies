import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Utilisation de BrowserRouter au lieu de Router

import Header from './assets/components/header/Header';
import Footer from './assets/components/footer/Footer';

import Home from './assets/pages/home/Home';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
