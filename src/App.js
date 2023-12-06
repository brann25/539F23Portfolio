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
        <Route exact path = "/" component = {Homepage}></Route>
        <Route  path = "/#/uxkitchr" component = {<UxKitchr/>}></Route>
        <Route  path = "/#/aboutme" component = {Aboutme}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
