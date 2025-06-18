import React,{useState, useEffect} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu from '../../assets/menu_icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);

  const [mobileMenu,setMobileMenu]= useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false):setMobileMenu(true);

  }

  return (
    <nav className= {`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt=""  className='logo'/>
    
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to="products" smooth={true} offset={-260} duration={500}>Products</Link></li>
        <li><button className='btn'><Link to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link> </button></li>
      </ul>
      <img src={menu} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
