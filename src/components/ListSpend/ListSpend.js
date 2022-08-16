import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';
import  InputSelect  from "./InputSelect"
import { ImFilter } from "react-icons/im";
import { meses } from "../../assets/Constants/Constants";

const ListSpend = ({spendByUser}) => {
    const [sum,setSum] = useState(0)
    const [month, setMonth] = useState("");
    const [filtro, setFiltro] = useState(false);
    const [gastosFiltrados, setGastosFiltrados] = useState([]);
    const sumatoria = (spendByUser) =>{
        return spendByUser?.reduce((acumulador, actual) => acumulador + parseInt(actual.amount), 0);
    }

    useEffect( () => {
        setSum(sumatoria(spendByUser));
    },[])

    const listarGastos = (spendByUser) => {
        return spendByUser?.map((data) => <ItemList key={data._id} data={data} />) 
    }
    const handleOnSelect = (e) => {
        setMonth(e.target.value)
        
    }
    const handleOnClickFilter = () => { 
        const mesSeleccionado = meses.indexOf(month)
        const fil = spendByUser?.filter( (item => parseInt(item.date.split("-")[1]) === mesSeleccionado))
        if(mesSeleccionado !== 0){
            setFiltro(true);
            setGastosFiltrados(fil)
            setSum(sumatoria(fil))
        } else {
            setFiltro(false)
            setSum(sumatoria(spendByUser))
        }
        
    }
  return (
    <Container>
        <H1>Lista de gastos</H1>
        <Tool>
            <div>
                <InputSelect props={meses} month={month} handleOnSelect={handleOnSelect}/> 
                <ButtonFilter onClick={handleOnClickFilter}><ImFilter /></ButtonFilter>
            </div>

            <Sum>GASTOS TOTAL: $ {sum}</Sum>
        </Tool>
        {
            !filtro ? listarGastos(spendByUser) : listarGastos(gastosFiltrados)
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
    align-items: center;
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

export const ButtonFilter = styled.button`
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    border-style: none;
    box-shadow: 2px 2px grey;
    border-radius: 3px;`;