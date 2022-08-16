import React, {useContext} from 'react'
import styled from 'styled-components';
import { colorsTheme } from '../../assets/Constants/Constants';
import MyContext from '../../Context';
import { meses } from "../../assets/Constants/Constants";

const Report = () => {

    const {spendsByUser} = useContext(MyContext);

    const sumatoria = (list) =>{
        return list?.reduce((acumulador, actual) => acumulador + parseInt(actual.amount), 0);
    }

    const imprimirReporte = (list) => {
        //const mesSeleccionado = meses.indexOf(month)
        let resul = []
        meses.forEach( (data,index) => {
            const fil = list?.filter( (item => parseInt(item.date.split("-")[1]) === index))

            if(fil.length !== 0){
                resul.push(
                    {
                        mes: data,
                        sdo: sumatoria(fil)
                    })
            }
        })
        return resul.map( (pos) => 
            <p key={pos.mes}>{pos.mes + " + " + pos.sdo}</p>
        )
       
        
    }

  return (
    <Container>
        <h1>REPORTE DE GASTOS POR MES</h1>
        {imprimirReporte(spendsByUser)}
    </Container>
  )
}

export default Report

export const Container = styled.div`
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: ${colorsTheme.base1};
    `;