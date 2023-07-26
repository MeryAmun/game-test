import React,{ useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from './components/index'
import './App.css';
import {Home} from "./pages/index";

function App() {
  const mainApp =useRef()
  const [toggleBar, setToggleBar] = useState(false);
  // const [data, setData] = useState({});
  


// useEffect(() => {
// const getData = async () => {
// await fetch("https://www.crazygames.com/game/turbo-stars---rival-racing",{
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// }).then((response) => (response?.json()
// )).then((data) => {
//   //setData(data)
// })
// }
// getData()
// }, [])

// console.log(data)


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
    <div className="app" ref={mainApp}> 
     {/* <div className="app__sidebar"> */}
     {/* <Sidebar /> */}
     {/* </div> */}
     <Navbar toggleBar={toggleBar} handleToggle={handleToggle} change={changeWidth} previous={prevWidth}/>
      <div className="app__body">
    
      <Sidebar />
        <Routes>   
<Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
