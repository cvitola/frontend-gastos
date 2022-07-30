import axios from 'axios';

const baseURL = 'https://myspends-api.herokuapp.com/api';

export const createNewSpend = async(date,category,amount) => {
        const response = await axios.post(`${baseURL}/spends`, {
                date: date,
                category: category,
                amount: amount
        }); 
        return response

}  

export const createNewUser = async(data) => {
        const response = await axios.post(`${baseURL}/auth/register` , {data});
        return response;
}

