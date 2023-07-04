


import { Formik, Form , Field, ErrorMessage } from "formik";
import { registerFormValidator } from "../../validators/auth.form.validator";
import {  useRegister } from "../../hooks/auth.hooks";
import { Link } from "react-router-dom";

function SignUpForm(){

      const {initialStates, onRegister} = useRegister();


    return  <div className="bg-dark vh-100 d-flex justify-content-center align-items-center text-center text-white">

    <div style={{border:"1px solid white "}} className="p-5">
      <div  className="row ">

        <h2> Register </h2>

        <div>
           <Formik
              initialValues={initialStates}
              validate={registerFormValidator}
              onSubmit={onRegister}
           >
         {({ isSubmitting }) => (
           <Form className="d-flex  flex-column justify-content-center align-items-center">

                 <Field
               type="text"
               name="name"
               placeholder="Enter your name"
               className="form-control m-2"
             />
            <ErrorMessage name="name" component="div" />

             <Field
               type="text"
               name="userId"
               placeholder="Enter your userId"
               className="form-control m-2"
             />
             <ErrorMessage name="userId" component="div" />

            <Field
               type="email"
               name="email"
               placeholder="Enter your email"
               className="form-control m-2"
             />
             <ErrorMessage name="email" component="div" />


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

      <Link to="/login">
            <p className="fw-bolder text-decoration-none text-light"> Existing User ?   Login </p>
      
      </Link>



    </div>

  </div>

}

export default SignUpForm;