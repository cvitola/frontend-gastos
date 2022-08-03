import React ,{ useContext, useState}from 'react'
import { colorsTheme } from '../../assets/Constants/Constants';
import { ContainerFirst, Button, H1, H2, Input, P } from '../BasicStyles/BasicStyles'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {loginUser} from "../../API/SpendBackEnd";
import MyContext from '../../Context';
import jwt_decode from "jwt-decode";
const Login = () => {

  const valueData = useContext(MyContext);
  const navigate = useNavigate();
  const handleOnClickGoTo = () => { navigate('/register')}
  const [email, setMail]  = useState("");
  const [password, setPassword]  = useState("");
  const [message, setMessage] = useState("");  

  const handleOnChangeMail = (e) => {setMail(e.target.value)}
  const handleOnChangePassword = (e) => {setPassword(e.target.value)}
  const validaContenido = (dato) => {
    return dato !== ""
}

  const handleOnClickLogin = async() =>{
    try {
      if(validaContenido(email) && validaContenido(password)){
        const login = {
          email: email,
          password: password
        }
        const response = await loginUser(login);
        
        console.log(response)
        if(response.status === 200) { 
          setMessage("Logueado!")
           valueData.accessToken =  response.data.token;
           let decode = jwt_decode(valueData.accessToken);
           valueData.firstName = decode.firstName;
           valueData.email = decode.email;
           valueData.id = decode.id;
           console.log(valueData)
           navigate('../carga')
        } 
        return response
      }else{
        setMessage("Error - revisar campos")
      }      
    } catch (error) {
      setMessage(error.response.data.message)
    }


      }

  
  return (
    <ContainerFirst>
      <Container>
      <H1>Bienvenido</H1>
      <H2>LOGIN</H2>
        <BoxLogin>
          <Input type="mail" placeholder="cosmefulanito@mail.com" value={email} onChange={handleOnChangeMail} />
          <Input type="password" placeholder="password" value={password} onChange={handleOnChangePassword} />
          <Button onClick={handleOnClickLogin}>ENVIAR</Button>
          <Info>{message}</Info>
          <P>No tenés cuenta?. <GoTo onClick={handleOnClickGoTo}>REGISTRATE</GoTo></P>        
        </BoxLogin>
        </Container>
    </ContainerFirst>
    
  )
}

export default Login

export const BoxLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    `
export const GoTo = styled.a`
    text-decoration: none;
    color: green;
    font-style: bold;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    `
export const Container = styled.div`
    max-width: 500px;
    padding-top:35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: ${colorsTheme.base1};
    `;

export const Info = styled.p`
  color: red`;