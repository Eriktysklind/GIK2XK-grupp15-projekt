//Vi har byggt upp vår UserService i frontend med inspiration från föreläsningarna.
// Vi har byggt funktionaliteten för getOne, getAll och Login
//med inspiriation från andra delar i föreläsningarna. 

import axios from './api';

export async function getOne(id){
    try {
        const response = await axios.get(`/users/${id}/getCart`);
        if (response.status === 200) return response.data;
        else {
          console.log(response.data);
          return null;
        }
    } catch(e){
        e?.response ? console.log(e.response.data) : console.log(e);
    }
 }

 
export async function getAll() {
    try {
      const response = await axios.get('/users');
  
      if (response.status === 200) return response.data;
      else {
        console.log(response);
        return [];
      }
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
  }


  //Funktion för inlogg ser över om vi ska köra på detta
  export async function login(email, password) {
    try {
      const response = await axios.post('/users/login', { email, password });
      return response.data;
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
  }