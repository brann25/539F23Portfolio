import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './component/homepage';
import UxKitchr from './component/uxKitchr';
import Footer from './component/footer';
import Aboutme from './component/aboutme';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route  path = "/#/" element = {<Homepage/>}></Route>
        <Route  path = "/#/uxkitchr" element = {<UxKitchr/>}></Route>
        <Route  path = "/#/aboutme" element = {<Aboutme/>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
