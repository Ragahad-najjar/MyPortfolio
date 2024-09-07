import './NavBarStyle.css'
import IconSun from '../../assets/img/sun.svg'
import IconMoon from '../../assets/img/moon.svg'
import MenuIcon from '../../assets/img/Menu.svg'
import CloseIcon from '../../assets/img/CloseIcon.svg'
import { useState } from 'react'
const NavBar = ({theme , setTheme}) => {
  const [active, setActive] = useState("navElements");
  const navToggle = () => {
    active == "navElements" ? setActive("nav_active ") : setActive('navElements') 
  } 
  const toggle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }
  const closeNav = () => {
    setActive("navElements");
  };
  return ( 
    <>
    <nav className="navbar">
      <h1 className='Logo'>Raghad<span>Najjar</span></h1>
      <div className={active} >
      <div className="MenuIconClose" onClick={closeNav }  >
        <img src={CloseIcon} alt="icon"   />
      </div>
        <div className={"listMenu"} >
          <ul> 
            <li> 
            <a href='/' className='active' >Home</a></li>
            <li><a href='#About'> 
            About </a></li>
            <li><a href='#Education'>Education</a></li>
            <li><a href='#Portfolio'> 
            Portfolio</a></li>
            <li><a href='#Contact'> 
            Contact</a></li>
            </ul>
          </div>
        <div className='ToggleIcon'> 
            <img src={theme == 'light'? IconMoon :IconSun} alt="icon-toggle-mode"onClick={()=>{ toggle_mode() }}/>
          </div>
          </div>
        <div className="MenuIcon" onClick={navToggle}  >
        <img src={MenuIcon} alt="icon"   />
      </div>
      </nav>
      </>
  )
}

export default NavBar





