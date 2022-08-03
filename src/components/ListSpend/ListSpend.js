import React, {useState} from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';


const ListSpend = ({listita}) => {
    const [sum,setSum] = useState(0)
    
    /*const listita=[
        {
            date: "Fecha Gasto",
            category: "Categoria",
            amount: "0"
        },
        {
            date: "2022-05-17",
            category:"Electro",
            amount: "6598"
        },
        {
            date: "2022-06-17",
            category:"Supermercado",
            amount: "2385"
        }
        
    ]*/

    const sumatoria = () =>{
        return listita.reduce((acumulador, actual) => acumulador + parseInt(actual.amount), 0);
    }

  return (
    <Container>
        <H1>Lista de gastos</H1>
        {
            listita.map((data, index) => <ItemList key={index} data={data} />) 
        }
        <Sum>{() => sumatoria()}</Sum> 
    </Container>
    
  )
}

export default ListSpend

export const Container = styled.div`
        width: 100%;
    padding-top:35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: #0A0A0A;
    `;

export const H1 = styled.h1`
    color: red;
    `;

export const Sum = styled.p`
    padding: 10px;
    background: #FAFAFA;
    color: red;
    `;