import React, {useState} from 'react'
import { Button, ContainerFirst, H1, Input } from '../../BasicStyles/BasicStyles'
import { BoxGasto } from '../GastoStyles'
import  { createNewSpend }  from "../../../API/SpendBackEnd";
import styled from 'styled-components';

const AltaGasto = () => {
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const handleOnChangeDate = (e) => {setDate(e.target.value)}
    const handleOnChangeCategory = (e) => {setCategory(e.target.value)}
    const handleOnChangeAmount = (e) => {setAmount(e.target.value)}

    const handleNewSpend = async() => {
      //primero sin validar para recuperar respuiesta de BackEnd.
      try{
        const response = await createNewSpend(date,category,amount);
        if (!response.ok) {
          throw new Error("No se pudo procesar la respuesta");
        }  
        return response;    
      } catch(error){
          console.log(error.response)
          setMessage(error.response.data)
      }

    }

    const handleClearFields = () =>{
        setDate("");
        setAmount("");
        setCategory("");
    }
  return (
    <ContainerFirst>
        <H1>Cargar Gasto</H1>
        <BoxGasto>
            <Input type="date" value={date} onChange={handleOnChangeDate}/>
            <Input type="text" placeholder='Categoria...' value={category} onChange={handleOnChangeCategory}/>
            <Input type="text" placeholder='Monto...' value={amount} onChange={handleOnChangeAmount}/>
            <Button onClick={handleNewSpend}>Enviar</Button>
            <Button onClick={handleClearFields}warning={true}>Cancelar</Button>
            <Info>{message}</Info>
        </BoxGasto>
    </ContainerFirst>
  )
}

export default AltaGasto

export const Info = styled.p`
  color: red`;