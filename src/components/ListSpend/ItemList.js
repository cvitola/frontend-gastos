import React from 'react'
import styled from 'styled-components';
import { FaTrashAlt } from "react-icons/fa";
import { deleteSpend } from "../../API/SpendBackEnd";

const ItemList = ({data}) => {
  const handleOnClickDelete = async() => { 
    const idGasto = data._id;
    try{
      const response = await deleteSpend(idGasto);
      if (!response.status === 200) {
        throw new Error("No se pudo procesar la respuesta");
      }  

    } catch(error){
        console.log(error.response.data)
    }
  }
  return (
    <Container>
        <Item>{data.date}</Item>
        <Item>{data.category}</Item>
        <Item>{data.amount}</Item>
        <ItemHand onClick={handleOnClickDelete}> <FaTrashAlt/> </ItemHand>
    </Container>
  )
}

export default ItemList

export const Container = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    background: #FAFAFA;
    gap: 10px;
    padding: 1px;
    margin: 1px;

    @media screen and (max-width: 563px){
      flex-direction: column;
      width: auto;
      border: 2px solid grey;
    }
    `;
export const Item = styled.li`
    min-width: 150px;
    padding: 5px;
    margin: 5px;
    `;

export const ItemHand = styled.li`
    
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    `;

