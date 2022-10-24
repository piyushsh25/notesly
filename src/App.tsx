import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Landing } from './Pages/Landing';
import { User } from './Pages/User';

function App() {
  return <div className='app-container'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path="/me" element={<User/>}/>
    </Routes>
    </BrowserRouter>
    </div>;
}

export default App;
