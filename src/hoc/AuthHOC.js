import UnAuthenticated from "../components/UnAuthenticated/UnAuthenticated";


function AuthHOC(props){

    //Authentication

    const user = localStorage.getItem("userId");
    const token  = localStorage.getItem("token");

    if(!token || !user){
        return <UnAuthenticated/>
    }

    return   <div>
    {props.children}
    </div>

}

export default AuthHOC;