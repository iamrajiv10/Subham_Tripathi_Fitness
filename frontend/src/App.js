// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/home';
import About from './Component/about';
import Login from './Component/login';
import Signup from './Component/signup';
import Details from './Component/form';
import Runner from './Component/trainer';
import Protected from './Component/protected';
import Feed from './Component/feed';
import Admin from './Component/admin'
import About1 from './Component/about1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About1 />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/details' element={<Protected Component={Details} />} />
      <Route path='/runner' element={<Runner />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/' element={<About/>}/>
      <Route path='/admin' element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
