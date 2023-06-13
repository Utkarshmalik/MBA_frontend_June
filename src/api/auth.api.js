import axios from 'axios'

const BASE_URL = process.env.REACT_APP_MBA_BACKEND_URL;

export const signIn = async (user)=>{


    try{
     const response = await axios.post(`${BASE_URL}/mba/api/v1/auth/signin`, user);

     const {name, email , userId, userTypes, status, accessToken} = response.data;

     if(accessToken){

        localStorage.setItem("name", name);
        localStorage.setItem("userId",userId);
        localStorage.setItem("email",email);
        localStorage.setItem("userTypes",userTypes);
        localStorage.setItem("token", accessToken);
     }

     return response.data;
    }
    catch(err){
        console.log(err);
        return err;
    }
     
}