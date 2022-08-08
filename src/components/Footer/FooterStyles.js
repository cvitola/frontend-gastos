import styled from "styled-components";

export const FooterPage = styled.footer`
    display: flex;
    align-items: center;
    margin-top: auto;
    `;

export const Container = styled.div`
    width:100%;
    background-color: rgb(12 77 162);
    color: darkblue;
    `;

export const Menu = styled.ul`
    padding: 10px;
    margin:10px;
    height: 100%;
    display:flex;
    justify-content: center;
    list-style: none;
    `;
export const MenuItem = styled.li`    
    display:flex;
    justify-content: center;
    align-items:center;
    color: #FAFAFA;
    height: 100%;
    padding: 0.5rem 2.5rem;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    svg{
        margin:10px;
        font-size: 1.5rem;
    }

    &:hover{
        color:#E0792A;
        transition: 0.5s all ease;
    }

    @media screen and (max-width: 960px){
        padding: 10px;
        marging: 10px;
    }

`;

export const TitleFoot = styled.h2`
    padding: 10px;
    margin: 10px;
    text-align: center;
    color: #FAFAFA;
    font-size: 12px;
    font-style: italic;
    font-weight: 200;
    `;



