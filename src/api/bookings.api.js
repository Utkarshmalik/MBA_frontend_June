import axios from 'axios'
import { TOKEN } from '../utils/constants';

const BASE_URL = process.env.REACT_APP_MBA_BACKEND_URL;


export const getAllBookings = async ()=>{

    try{
    const res= await axios.get(`${BASE_URL}/mba/api/v1/bookings`,{headers:{
        'x-access-token':localStorage.getItem(TOKEN)
    }})

    return res;

   }
   catch(err){
    console.log(err);
   }
}