import React, {useState, useContext, useEffect} from 'react'
import { Button,  H1, Input } from '../../BasicStyles/BasicStyles'
import { colorsTheme } from '../../../assets/Constants/Constants';
import  { createNewSpend, getSpendsByUser }  from "../../../API/SpendBackEnd";
import styled from 'styled-components';
import MyContext from "../../../Context";
import ListSpend from '../../ListSpend/ListSpend';



const AltaGasto = () => {

    const valueContext = useContext(MyContext);
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    useEffect( () => {
      onGetSpendsByUser()

   }, []);

    const handleOnChangeDate = (e) => {setDate(e.target.value)}
    const handleOnChangeCategory = (e) => {setCategory(e.target.value)}
    const handleOnChangeAmount = (e) => {setAmount(e.target.value)}

    const handleNewSpend = async() => {
      //primero sin validar para recuperar respuiesta de BackEnd.
      const userID = valueContext.id;
      try{
        const response = await createNewSpend(date,category,amount, userID);
        if (!response.status === 200) {
          throw new Error("No se pudo procesar la respuesta");
        }  
        setMessage("Gasto cargado")    
        handleClearFields();
      } catch(error){
          setMessage(error.response.data)
      }

    }

    const handleClearFields = () =>{
        setDate("");
        setAmount("");
        setCategory("");
    }

    const onGetSpendsByUser = async() => {
      const response = await getSpendsByUser( valueContext.id );
      valueContext.spendsByUser = response.data
    }


  return (
    <Container>
        <H1>Cargar Gasto</H1>
        <BoxGasto>
            <Input type="date" value={date} onChange={handleOnChangeDate}/>
            <Input type="text" placeholder='Categoria...' value={category} onChange={handleOnChangeCategory}/>
            <Input type="text" placeholder='Monto...' value={amount} onChange={handleOnChangeAmount}/>
            <Button onClick={handleNewSpend}>Enviar</Button>
            <Button onClick={handleClearFields}warning={true}>Cancelar</Button>
            <Info>{message}</Info>
        </BoxGasto>

        <ListSpend spendByUser={valueContext.spendsByUser} />
    </Container>
  )
}

export default AltaGasto

export const Info = styled.p`
  color: red;
  `;

export const Container = styled.div`
    width: 100%;
    padding-top:35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: ${colorsTheme.base1};
    `;

export const BoxGasto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border: 2px solid;
    border-radius: 2px;
    `;