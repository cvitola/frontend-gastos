import React,{useState} from 'react'
import styled from 'styled-components';
import { Button, ContainerFirst, H1, Input } from '../BasicStyles/BasicStyles';
import { colorsTheme } from '../../assets/Constants/Constants';
import { useNavigate } from 'react-router-dom';
import { createNewUser } from '../../API/SpendBackEnd';

const Register = () => {
    const [name, setName]  = useState("");
    const [surName, setSurName]  = useState("");
    const [mail, setMail]  = useState("");
    const [password, setPassword]  = useState("");
    const [message, setMessage] = useState("");

    const handleOnChangeName = (e) => {setName(e.target.value)}
    const handleOnChangeSurName = (e) => {setSurName(e.target.value)}
    const handleOnChangeMail = (e) => {setMail(e.target.value)}
    const handleOnChangePassword = (e) => {setPassword(e.target.value)}

    const validaContenido = (dato) => {
        return dato != ""
    }
    const handleOnClickRegister = async() => {
        try{
            if(validaContenido(name) && validaContenido(surName) && validaContenido(mail) && validaContenido(password)){
                const register = {
                    name: name,
                    surName: surName,
                    mail: mail,
                    password: password
                }
                console.log(register)
                const response = await createNewUser(register);
                if(!response.ok){
                    throw new Error("No se pudo procesar la respuesta");
                }
                return response;
            }else{
                console.log("Error - Revisar campos")
            }
        } catch(error){
            console.log(error.response.data)
            setMessage(error.response.data)
        }


    }
  return (
    <ContainerFirst>
        <Container>
            <H1>Registrate</H1>
            <NameAndSurName>
                <Input type="text" placeholder="Cosme..." value={name} onChange={handleOnChangeName} />
                <Input type="text" placeholder="Fulanito..." value={surName} onChange={handleOnChangeSurName} />
            </NameAndSurName>
            <Input type="mail" placeholder="cosmefulanito@mail.com" value={mail} onChange={handleOnChangeMail} />
            <Input type="password" placeholder="password" value={password} onChange={handleOnChangePassword} />
            <Button onClick={handleOnClickRegister}>Enviar</Button>
            <Info>{message}</Info>
        </Container>
    </ContainerFirst>
  )
}

export default Register;

export const NameAndSurName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `
export const Container = styled.div`
    max-width: 500px;
    padding-top:35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color: ${colorsTheme.base1};
`;

export const Info = styled.p`
  color: red`;
