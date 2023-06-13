
import { Formik, Form , Field, ErrorMessage } from "formik";
import { formValidator } from "../../validators/auth.form.validator";
import { useAuth } from "../../hooks/auth.hooks";

function Auth(){

  const {initialStates, onLogin} = useAuth();

  return <div className="bg-dark vh-100 d-flex justify-content-center align-items-center text-center text-white">

    <div style={{border:"1px solid white "}} className="p-5">
      <div  className="row ">

        <h2> Login </h2>
        
        <div>
           <Formik
              initialValues={initialStates}
              validate={formValidator}
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
             <button className="form-control m-2"  type="submit" disabled={isSubmitting}>
               Submit
             </button>
           </Form>
         )}
       </Formik>
        </div>
      </div>

    </div>

  </div>

}

export default Auth;