import React,{ useState, useRef } from 'react'
import { BiTimeFive,BiHomeAlt2 } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { sideBarData, sidebarRecent } from '../../data/data';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './sidebar.css'


const Sidebar = ({change, previous}) => {
  const [activeId, setActiveId] = useState(null);
 
  const [toggleWidth, setToggleWidth] = useState(false);
  const sidebarWidth = useRef();
 


//  const closeSide = () => {
//    sidebarWidth.current.style.display = 'none'
//   }

console.log(setToggleWidth)

  // const toggleSide = () => {
  //  if(toggleWidth){
  //   change()
  //   setToggleWidth((prev) => !prev)
  //  }else{
  //   previous()
  //   setToggleWidth((prev) => !prev)
  //  }
   
  // }
 
  return (
    <div className='sidebar'>
      <div 
      className={  toggleWidth  ? "sidebar__wrapper sidebar__wrapperActive" : "sidebar__wrapper "}
       ref={sidebarWidth}>
  <div className="sidebar__links"> 
   <div className="sidebar__recentLinks">
   <div className="sidebar__linkContainer"
     >
      <span  className="sidebar__link">
      {
        <BiHomeAlt2 size={20} className="sidebar__linkIcon"/>
      }
    <span className='sidebar__linkTitle'>
      Home
      </span>
      </span>
      </div>
   <div className="sidebar__linkContainer"
     >
      <span  className="sidebar__link">
      {
        <BiTimeFive size={20} className="sidebar__linkIcon"/>
      }
    <span className='sidebar__linkTitle'>
      Recently Played
      </span>
      </span>
      </div>
  {
    sidebarRecent.map((link) => (
      <OverlayTrigger
      placement='bottom'
      delay={{ show: 1050, hide: 400 }}
      overlay={
        <Tooltip id={`tooltip-bottom`}>
         {link.title}
        </Tooltip>
      }
      key={link.id} 
    >
      <div className= { activeId === link.id ? "sidebar__linkContainer sidebar__linkContainerActive" : "sidebar__linkContainer"}
      onClick={() => setActiveId(link.id)
      }>
      <Link to={link.link} className="sidebar__link">
      {
        <link.icon size={20} className={ activeId === link.id ? 'sidebar__iconAnd__sidebarIconNameActive': 'sidebar__linkIcon'}/>
      }
    <span className={ activeId === link.id ? 'sidebar__linkTitleActive sidebar__iconAnd__sidebarIconNameActive': 'sidebar__linkTitle'}>
      {link.title}
      </span>
      </Link>
      </div>
      </OverlayTrigger>
    ))
}
</div>
  {
    sideBarData.map((link) => (
      <OverlayTrigger
      placement='bottom'
      delay={{ show: 1050, hide: 400 }}
      overlay={
        <Tooltip id={`tooltip-bottom`}>
         {link.title}
        </Tooltip>
      }
      key={link.id} 
    >
      <div className= { activeId === link.id ? "sidebar__linkContainer sidebar__linkContainerActive" : "sidebar__linkContainer"}
      onClick={() => setActiveId(link.id)
      }>
      <Link to={link.link} className="sidebar__link">
      {
        <link.icon size={20} className={ activeId === link.id ? 'sidebar__iconAnd__sidebarIconNameActive': 'sidebar__linkIcon'}/>
      }
    <span className={ activeId === link.id ? 'sidebar__linkTitleActive sidebar__iconAnd__sidebarIconNameActive': 'sidebar__linkTitle'}>
      {link.title}
      </span>
      </Link>
      </div>
      </OverlayTrigger>
    ))
   }</div>
      </div>
    </div>
  )
}

export default Sidebar