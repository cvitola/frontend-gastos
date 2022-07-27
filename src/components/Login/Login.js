import React from 'react'
import { Button, ContainerFirst, H1, H2, Input, P } from '../BasicStyles/BasicStyles'
import { BoxLogin } from './LoginStyles'

const Login = () => {
  return (
    <ContainerFirst>
      <H1>Bienvenido</H1>
      <H2>LOGIN</H2>
        <BoxLogin>
          <Input type="text" placeholder="Usuario" />
          <Input type="password" placeholder='password'/>
          <Button>ENVIAR</Button>
          <P>No tenés cuenta?. REGISTRATE</P>        
        </BoxLogin>
    </ContainerFirst>
    
  )
}

export default Login