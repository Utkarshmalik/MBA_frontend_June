

import { Formik, Form , Field, ErrorMessage } from "formik";
import { formValidator, loginFormValidator } from "../../validators/auth.form.validator";
import { useLogin } from "../../hooks/auth.hooks";
import { Link, useLocation, useParams } from "react-router-dom";

function LoginForm(){

      const {initialStates, onLogin} = useLogin();


    return  <div className="bg-dark vh-100 d-flex justify-content-center align-items-center text-center text-white">

    <div style={{border:"1px solid white "}} className="p-5">
      <div  className="row ">

        <h2> Login </h2>

        <div>
           <Formik
              initialValues={initialStates}
              validate={loginFormValidator}
              onSubmit={onLogin}
           >
         {({ isSubmitting }) => (
           <Form className="d-flex  flex-column justify-content-center align-items-center">
             <Field
               type="text"
               name="userId"
               placeholder="Enter your userId"
               className="form-control m-2"
             />
             <ErrorMessage name="userId" component="div" />

             <Field
               type="password"
               name="password"
               placeholder="Enter password"
              className="form-control m-2"

             />
             <ErrorMessage name="password" component="div" />
             <button className="form-control m-2" name="submitButton" type="submit" disabled={isSubmitting}>
               Submit
             </button>

             <span> {} </span>

           </Form>
         )}
       </Formik>
        </div>
      </div>

      <br/>

      <Link to="/signUp">
            <p className="fw-bolder text-decoration-none text-light"> New User ?      Sign Up </p>
      
      </Link>



    </div>

  </div>

}

export default LoginForm;