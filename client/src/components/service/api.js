import axios from 'axios';
const url = 'http://localhost:8000';
export const addUser = async(data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log(`error occured `, error.message)
    }
}
export const getUser = async() => {
    try {
        let response = await axios.get(`${url}/user`);
        return response.data;
    } catch (error) { console.log(error.message) }
}
export const setConv = async(data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) { console.log(error.message) }
}
export const getConv = async(data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (error) { console.log(error.message) }
}
export const newMsg = async(data) => {
    try {
        let response = await axios.post(`${url}/message/add`, data);
        return response.data;
    } catch (error) { console.log(error.message) }
}
export const getmsgs = async(id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) { console.log(error.message) }
}