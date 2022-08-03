import axios from 'axios';

//const baseURL = 'https://myspends-api.herokuapp.com/api'; 
const baseURL = 'http://localhost:3001/api';

export const createNewSpend = async(date,category,amount, userID) => {
        const response = await axios.post(`${baseURL}/spends`, {
                date: date,
                category: category,
                amount: amount,
                userID: userID
        }); 
        return response

}  

export const createNewUser = async(data) => {
        const response = await axios.post(`${baseURL}/auth/register` , data);
        return response;
}

export const loginUser = async(data) => {
        const response = await axios.post(`${baseURL}/auth/login` , data);
        return response;
}

export const getSpendsByUser = async(userID) => {

        const response = await axios.get(`${baseURL}/spends/byuser`, {
                userID: userID
        });
        return response;
}

export const getAllSpends = async() => {
        const response = await axios.get(`${baseURL}/spends`);
        return response;
}
