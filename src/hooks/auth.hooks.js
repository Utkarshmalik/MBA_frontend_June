import { useLocation, useNavigate } from "react-router-dom";
import { register, signIn } from "../api/auth.api";
import { TOKEN, USER_TYPES, userTypes } from "../utils/constants";
import { useEffect } from "react";

export const useLogin=()=>{

    const initialStates = { userId: "", password: ""};
    const location  = useLocation();
   const redirectURL= new URLSearchParams(location.search).get('redirectKey');
   console.log(redirectURL);

    const navigate = useNavigate();

      const redirect = ()=>{
      const userType = localStorage.getItem(USER_TYPES);
      const token  = localStorage.getItem(TOKEN);

      if(!userType || !token){
        return;
      }

      if(redirectURL){
        navigate(redirectURL)
      }
      else if(userType === userTypes.ADMIN){
        navigate("/admin");
      }
      else if(userType === userTypes.CLIENT){
        navigate("/client");
      }
      else {
        navigate("/");
      }
    }


     useEffect(()=>{
     redirect();
    },[])


   

    const onLogin = async (values, props) => {
      console.log(props);
            const userDetails = {userId:values.userId, password:values.password};
            const loginResponse = await signIn(userDetails);
            console.log(loginResponse);
            props.setSubmitting(false);
            props.setErrors({ result: "Invalid password" });

            redirect();
    }

    return {initialStates, onLogin};
}



export const useRegister=()=>{

    const initialStates = { name:"", email:"", userId: "", password: ""};


    const navigate = useNavigate();

      const redirect = ()=>{
      const userType = localStorage.getItem(USER_TYPES);
      const token  = localStorage.getItem(TOKEN);

      if(!userType || !token){
        return;
      }

      if(userType === userTypes.ADMIN){
        navigate("/admin");
      }
      else if(userType === userTypes.CLIENT){
        navigate("/client");
      }
      else {
        navigate("/login");
      }
    }


     useEffect(()=>{
     redirect();
    },[])


   

    const onRegister = async (values, props) => {
      // console.log(props);
            const userDetails = {name:values.name, email:values.email, userId:values.userId, password:values.password};
            const registerResponse = await register(userDetails);

            if(registerResponse.status===201){

              navigate("/login");

            }
    }

    return {initialStates, onRegister};
}