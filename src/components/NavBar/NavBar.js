import React ,{useState, useContext} from 'react'
import { Container, Wrapper, LogoContainer, MobileIcon, Menu, MenuItem, MenuItemLink, ImgLogo, User} from './NavBarStyles'
import  imgLogo  from '../../assets/img/MisGastos.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaRegGrin } from "react-icons/fa";
import MyContext from '../../Context';

const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const value = useContext(MyContext)
  const handleOnClickHome = () => {
    setShowMobileMenu(!showMobileMenu)
    navigate('/home')
  }
  const handleOnClickLogin = () => {
    setShowMobileMenu(!showMobileMenu)
    navigate('/login')
  }
  const handleOnClickAltaGasto = () => {
    setShowMobileMenu(!showMobileMenu)
    navigate('/carga')
  }

  const handleOnClickReporte = () => {
    setShowMobileMenu(!setShowMobileMenu)
    navigate('/reporte')
  }

  const handleOnClickLogOut = () => {
    setShowMobileMenu(!showMobileMenu)
    value.accessToken=""
    navigate('/home')
  }

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
            <ImgLogo src={imgLogo} />  
        </LogoContainer>
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {
            showMobileMenu ? <FaTimes /> : <FaBars />
          }
        </MobileIcon>
        <Menu open={showMobileMenu}>
          <MenuItem onClick={handleOnClickHome}>
            <MenuItemLink>HOME</MenuItemLink>
          </MenuItem>
          { 
            !value.accessToken && 
            <MenuItem onClick={handleOnClickLogin}>
              <MenuItemLink>LOGIN</MenuItemLink>
            </MenuItem>
          }
          {
            value.accessToken &&
            <MenuItem onClick={handleOnClickAltaGasto}>
              <MenuItemLink>CARGA</MenuItemLink>
            </MenuItem>          
          }
          {
            value.accessToken &&
            <MenuItem onClick={handleOnClickReporte}>
              <MenuItemLink>REPORTE</MenuItemLink>
            </MenuItem>          
          }
          {
            value.accessToken &&
            <MenuItem onClick={handleOnClickLogOut}>
              <MenuItemLink>LOGOUT</MenuItemLink>
            </MenuItem>
          }
          {
            value.accessToken && <User> <FaRegGrin />  HOLA  {value.firstName}!</User>
          }
        </Menu>
      </Wrapper>
    </Container>
  )
}

export default NavBar


