import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { User } from './Components/UserPage/User';

function App() {
  return <div className='app-container'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/me" element={<User/>}/>
    </Routes>
    </BrowserRouter>
    </div>;
}

export default App;
