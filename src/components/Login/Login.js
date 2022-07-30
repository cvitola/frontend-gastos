import React from 'react'
import { colorsTheme } from '../../assets/Constants/Constants';
import { ContainerFirst, Button, H1, H2, Input, P } from '../BasicStyles/BasicStyles'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const handleOnClickGoTo = () => { navigate('/register')}
  return (
    <ContainerFirst>
      <Container>
      <H1>Bienvenido</H1>
      <H2>LOGIN</H2>
        <BoxLogin>
          <Input type="text" placeholder="Usuario" />
          <Input type="password" placeholder='password'/>
          <Button>ENVIAR</Button>
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