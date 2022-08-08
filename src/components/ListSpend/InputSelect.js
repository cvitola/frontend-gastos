import React ,{useState} from 'react'
import styled from 'styled-components';
const InputSelect = ({props,month,handleOnSelect}) => {
  
  /*const [month,setMonth] = useState("")
  const handleOnSelect = (e) => {
    setMonth(e.target.value);
    console.log(month)}*/
  return (
    
    <Selector onChange={handleOnSelect}>
        {
            props?.map( (month ) => <option value={month} name={month} >{month}</option>)
        }
        
    </Selector>
  )
}

export default InputSelect

export const Selector = styled.select`
    width: 150px;
    padding: 10px;
    margin: 10px;
    border-style: 2px grey;
    border-radius: 3px;
    `