import React ,{useState} from 'react'
import { Container, Wrapper, LogoContainer, MobileIcon, Menu, MenuItem, MenuItemLink, ImgLogo} from './NavBarStyles'
import  imgLogo  from '../../assets/img/MisGastos.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

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
          <MenuItem onClick={handleOnClickLogin}>
            <MenuItemLink>LOGIN</MenuItemLink>
          </MenuItem>
          <MenuItem onClick={handleOnClickAltaGasto}>
            <MenuItemLink>CARGA</MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  )
}

export default NavBar
