
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Map from './pages/Map';
import './App.css';
import MainpageMap from './pages/MainpageMap';
import Calculator from './components/Calculator';
// import Login from './pages/Login';
import BottomNav from './components/BottomNav';
// import Signup from './pages/Signup';

import Info from './pages/Info'

import NewLogin from './components/NewLogin';



function App() {


  const [navBool,setNavBool] = useState(true)


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/info" exact element={<Info setNavBool={setNavBool}/>}/>
          <Route path="/" exact element={<NewLogin setNavBool={setNavBool}/>}/>
          <Route path="/contribute" exact element={<Calculator setNavBool={setNavBool}/>}/>          
          <Route path='/map' element={<Map />}/>
          <Route path='/main' element={<MainpageMap setNavBool={setNavBool} placement={"bottom"}/>}/>

        </Routes>
      <BottomNav nav={navBool}/>
      </BrowserRouter >
    </div>
  );
}

export default App;