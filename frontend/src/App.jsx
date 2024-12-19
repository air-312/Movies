import './App.css'
import { Router, Routes, Route } from 'react-router-dom';

import Header from '../src/assets/components/Header.jsx'


function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route index element ={'Page dacceuil'}></Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
