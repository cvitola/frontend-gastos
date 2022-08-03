import styled, { keyframes } from 'styled-components';
import { colorsTheme } from '../../assets/Constants/Constants';

export const H1 = styled.h1`
    padding: 10px;
    margin: 10px;
    font-weight: 900;
    font-size: 48px;
    text-shadow: 1px 1px 1px white;
    `;

export const P = styled.p`
    padding: 5px;
    margin: 5px;
    font-size: 16px;
    `;

export const Input = styled.input`
    padding: 10px;
    margin: 10px;
    border: none;
    box-shadow: 1px 1px 1px grey;
    border-radius: 5px;
    `;
export const Button = styled.button`
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 80%;
    background: ${props => props.warning ? colorsTheme.warning : colorsTheme.base2};
    border-radius: 10px;
    cursor: pointer;
    
    &:hover{
        color: ${props => props.base2 ? colorsTheme.base2 : colorsTheme.warning};
        background: white;
    }`;

export const H2 = styled.h2`
    padding: 10px;
    margin: 10px;
    font-weight: 600;
    font-size: 36px;
    color: ${colorsTheme.blue};
    `;

export const Container = styled.ul`
    width: 100%;
    max-width: 1200px;
    /*height: 430px;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    list-style: none;

    & li {
        padding: 10px;
    }

    & h3{
        padding: 20px;
        margin: 20px;
        font-size: 28px;
        color: ${colorsTheme.red3}
    }
    `;

export const ContainerFirst = styled.div`
    width: 100%;
    padding-top:35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: ${colorsTheme.base1};
    `;

const girar = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `;

export const Loader = styled.div`
    width: 70px;
    height: 70px;
    padding: 30px;
    margin: 30px;
    border: 10px solid #eee;
    border-top: 10px solid #666;
    border-radius: 50%;
    animation-name: ${girar};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    `;

export const KeyPad = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center
    padding: 10px;
    margin: 10px;
    `;
