import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import PageNotFound from './components/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/Signup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='about-us' element={<Update/>}></Route>
          <Route path='login' element={<Update/>}></Route>
          <Route path='signup' element={<Signup/>}></Route>

          <Route path='*' element={<PageNotFound/>}></Route>

        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
