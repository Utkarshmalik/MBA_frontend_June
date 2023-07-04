

import {  useLocation} from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Auth(){

  const url = useLocation();
  const isLoginPage = (url.pathname=="/login");
  console.log(isLoginPage);

  return <>

    {isLoginPage &&  <LoginForm/> }

    {!isLoginPage && <SignUpForm/>}  

  </>
  
  

}

export default Auth;