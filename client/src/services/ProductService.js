//Vi har byggt upp vår ProductService i frontend efter hur det gjordes på lektionera och anpassat namngivningen 
//så att det fungerar efter våra databaser. Vi har byggt funktionaliteten för addRating, showRating och addToCart
//med inspiriation från andra delar i föreläsningarna. 

import axios from './api';

export async function getAll(endpoint = '/product') {
    try {
        const response = await axios.get(endpoint);
    
        if(response.status === 200) return response.data;
        else{
            console.log(response)
            return [];
        }
    } catch(e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
 }

 export async function getOne(id){
    try {
        const response = await axios.get(`/product/${id}`);
        if (response.status === 200) return response.data;
        else {
          console.log(response.data);
          return null;
        }
    } catch(e){
        e?.response ? console.log(e.response.data) : console.log(e);
    }
 }

 export async function create(product) {
    try {
      const response = await axios.post('/product', product);
      if (response.status === 200) return response.data;
      else {
        console.log(response.data);
        return null;
      }
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
  }

  export async function update(product) {
    try {
      const response = await axios.put('/product', product);
      if (response.status === 200) return response.data;
      else {
        console.log(response.data);
        return null;
      }
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
  }

  export async function remove(id) {
    try {
      const response = await axios.delete('/product', { data: { id } });
      if (response.status === 200) return response.data;
      else {
        console.log(response.data);
        return null;
      }
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
  }

  export async function addRating(productId, rating) {
    try {
      const response = await axios.post(`/product/${productId}/addRating`, {rating});
      if (response.status === 200) return response.data;
      else {
        console.log(response.data);
        return null;
      }
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
  }

  export async function showRating(productId) {
    try {
      const response = await axios.get(`/product/${productId}/ratings`);
      if (response.status === 200) return response.data;
      else {
        console.log(response.data);
        return null;
      }
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
  }

  export async function addToCart(productId, userId, amount) {
    try {
      const response = await axios.post(`/product/${productId}/addToCart`, {
        userId,
        amount
      });
      if (response.status === 200) return response.data;
      else {
        console.log(response.data);
        return null;
      }
    } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
    }
  }