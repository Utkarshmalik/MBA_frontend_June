import axios from 'axios'
import { TOKEN } from '../utils/constants';

const BASE_URL = process.env.REACT_APP_MBA_BACKEND_URL;


export const getAllTheatres = async ()=>{

    try{
    const res= await axios.get(`${BASE_URL}/mba/api/v1/theatres`,{headers:{
        'x-access-token':localStorage.getItem(TOKEN)
    }})

    return res;

   }
   catch(err){
    console.log(err);
   }
}

export const getTheatresForAMovie = async (movieId)=>{

       try{
    const res= await axios.get(`${BASE_URL}/mba/api/v1/movies/${movieId}/theatres`,{headers:{
        'x-access-token':localStorage.getItem(TOKEN)
    }})

    return res;

   }
   catch(err){
    console.log(err);
   }

}

export const getTheatresById = async (theatreId)=>{

       try{
    const res= await axios.get(`${BASE_URL}/mba/api/v1/theatres/${theatreId}`,{headers:{
        'x-access-token':localStorage.getItem(TOKEN)
    }})

    return res;

   }
   catch(err){
    console.log(err);
   }

}

export const updateTheatresById = async (theatreId, updatedData)=>{

       try{
    const res= await axios.put(`${BASE_URL}/mba/api/v1/theatres/${theatreId}`,updatedData, {headers:{
        'x-access-token':localStorage.getItem(TOKEN)
    }})

    return res;

   }
   catch(err){
    console.log(err);
   }

}