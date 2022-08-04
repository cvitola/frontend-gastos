import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';
import  InputSelect  from "./InputSelect"
import { ImFilter } from "react-icons/im";
import { meses } from "../../assets/Constants/Constants";

const ListSpend = ({spendByUser}) => {
    const [sum,setSum] = useState(0)
    console.log(spendByUser)
    const sumatoria = () =>{
        return spendByUser.reduce((acumulador, actual) => acumulador + parseInt(actual.amount), 0);
    }
    useEffect( () => {
        setSum(sumatoria());
    },[])
  return (
    <Container>
        <H1>Lista de gastos</H1>
        <Tool>
            <div>
                <ImFilter />
                <InputSelect props={meses} /> 
            </div>

            <Sum>GASTOS TOTAL: $ {sum}</Sum>
        </Tool>
        { 
            spendByUser?.map((data) => <ItemList key={data._id} data={data} />) 
        }
         
    </Container>
    
  )
}

export default ListSpend

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: #EFFCFF;
    `;

export const H1 = styled.h1`
    color: red;
    `;

export const Sum = styled.p`
    padding: 10px;
    background: #FAFAFA;
    color: red;
    `;

export const Tool = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: CEnter;
    background: #FAFAFA;
    gap: 10px;
    @media screen and (max-width: 563px){
      flex-direction: column;
      width: auto;
      border: 2px solid grey;
    }
    `;

export const Input = styled.input`
    `;