import './Header.css'
import navLogo from '../img/troll-face.png'

function Header() {
  return (
    <nav className='navBar'>
        <img className='logo' src={navLogo} alt="logo" />
        <h1 className='navTitle'>Meme Generator</h1>
        <p className='navText'>React Course - Project 3</p>
    </nav>
  )
}

export default Header