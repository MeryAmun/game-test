import React,{ useState, useRef } from "react";
//import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from './components/index'
import './App.css';

function App() {
  const mainApp =useRef()
  const [toggleBar, setToggleBar] = useState(false);
  const handleToggle = () => {
    setToggleBar((prev) => !prev)
  }
  const changeWidth = () => {
    mainApp.current.style.width = '90%'
    mainApp.current.style.transition = 'width ease 0.31s';
        
      }
      const prevWidth = () => {
    mainApp.current.style.width = '70%'
    mainApp.current.style.transition = 'width ease 0.31s';
       
      }
  return (
    <div className="App" ref={mainApp}>
       <Navbar toggleBar={toggleBar} handleToggle={handleToggle} change={changeWidth} previous={prevWidth}/>
      <div className="app__body">
      <Sidebar/>
        {/* <Routes>
<Route path='/' element={<ProductDetails />}/>
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
