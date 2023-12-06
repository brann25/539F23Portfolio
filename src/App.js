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
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path = "/" element = {<Homepage/>}></Route>
        <Route exact path = "/uxKitchr" element = {<UxKitchr/>}></Route>
        <Route exact path = "/aboutme" element = {<Aboutme/>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
