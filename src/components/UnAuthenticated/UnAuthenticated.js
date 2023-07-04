import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


function UnAuthenticated(){

    const location = useLocation();
    const currentPath = location.pathname;

    return <div className=" vh-100 bg-dark text-light d-flex flex-column align-items-center justify-content-center">

        <h3 className="fw-bolder"> You need to be logged in to access this page  </h3>
        <Link to={`/login?redirectKey=${currentPath}`}>
                    <Button  variant="primary"  > Login  </Button>
        </Link>
         </div>

}


export default UnAuthenticated;