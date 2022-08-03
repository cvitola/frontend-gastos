import React, { useState, useContext } from 'react'
import { Button, Container, ContainerFirst, CoverPage, H1, H2, Input } from '../../components/BasicStyles/BasicStyles';
import { ImgHome } from './HomeStyles';
import imgLogo from '../../assets/img/MisGastos.png'
import MyContext from '../../Context';

const Home = () => {
  const value = useContext(MyContext);
  
  const tocame = () => { console.log(value)}
  return (
    <ContainerFirst>
      <ImgHome src={imgLogo} />
    </ContainerFirst>


  )
}

export default Home