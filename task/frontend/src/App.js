import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PageNotFound from './components/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About'
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='about-us' element={<About />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='dashboard' element={< ProtectedRoute Component={<Dashboard />} />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
