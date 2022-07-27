import {FooterPage, Container, Menu, MenuItem, TitleFoot} from './FooterStyles';
import { FaFacebookF,FaTwitch,FaTwitter,FaWhatsapp,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return <FooterPage>
      <Container>
        <Menu>
          <MenuItem>
            <FaFacebookF />
          </MenuItem>
          <MenuItem>
            <FaTwitch />
          </MenuItem>
          <MenuItem>
            <FaTwitter/>
          </MenuItem>
          <MenuItem>
            <FaWhatsapp/>
          </MenuItem>
          <MenuItem>
            <FaInstagram/>
          </MenuItem>
        </Menu>
        <TitleFoot>© 2022, hecho con 💗 por VittoSolution & NUCBA.</TitleFoot>
      </Container>
  </FooterPage>;
};

export default Footer;
