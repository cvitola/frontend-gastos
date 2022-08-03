import React from 'react'
import styled from 'styled-components';

const ItemList = ({data}) => {
  return (
    <Container>
        <Item>{data.date}</Item>
        <Item>{data.category}</Item>
        <Item>{data.amount}</Item>
        <Item>Eliminar</Item>
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
    width: 90%;
    `;
export const Item = styled.li`
    width: 100px;
    padding: 5px;
    margin: 5px;
    `;

