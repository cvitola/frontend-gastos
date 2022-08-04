import React from 'react'
import styled from 'styled-components';
const InputSelect = ({props}) => {

  return (
    
    <Selector>
        {
            props?.map( (item ) => <option value={item}>{item}</option>)
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