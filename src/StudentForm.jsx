import './StudentForm.css';
import { useState, useRef } from 'react';

export default function StudentForm(props) {

    const [errors, setErrors] = useState({
        firstnameError: false,
        lastnameError: false,
        emailError: false,
        isValid: true,
    });

    const initialData = {
        firstname: "",
        lastname: "",
        email: "",
        isValid: false,
        onSubmit: false,
    };

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        isValid: false,
        onSubmit: false,
    });
    
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    
    function submitForm(event) {
        event.preventDefault();
        validateForm(formData);
    }

    function validateForm(formData) {
                
        let fName = formData.firstname;
        let lName = formData.lastname;
        let email = formData.email;
        //new errors obj(can mutate it) to use it on setErrors
        let newErrors = { firstnameError: false, lastnameError: false, emailError: false, isValid:true,};

        //regEx for validations
        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const validText = (/^[a-zA-Z]+$/);
        //to check if I can on submit(no errors) or not(errors)
        let onSubmitStatus = true;

        if (!validEmail.test(email)) {
            newErrors.emailError = true;
            newErrors.isValid = false;
            //set focus on this input field + style it
            emailRef.current.focus();
            emailRef.current.style.border = "1px solid red";
        }
        else {
            //no errors, so remove style and no focus anymore
            emailRef.current.style.border = "";
        }
        if (!validText.test(lName)) {
            newErrors.lastnameError = true;
            newErrors.isValid = false;
            //set focus on this input field + style it
            lastnameRef.current.focus();
            lastnameRef.current.style.border = "1px solid red";
        }
        else {
            //no errors, so remove style and no focus anymore
            lastnameRef.current.style.border = "";
        }
        if (!validText.test(fName)) {
            newErrors.firstnameError = true;
            newErrors.isValid = false;
             //set focus on this input field + style it
            firstnameRef.current.focus();
            firstnameRef.current.style.border = "1px solid red";
        }
        else {
            //no errors, so remove style and no focus anymore
            firstnameRef.current.style.border = "";
        }
        
        //if there are errors (validation is false), im not on submit status
        if (newErrors.isValid === false) { onSubmitStatus = false }
        //set up the error of validation
        setErrors({...newErrors});
        //if im on submit status, set focus on first input field and set form data to empty(initialData)
        if (onSubmitStatus) {
            firstnameRef.current.focus();
            setFormData({ ...initialData });
        }
        //IF no errors (isValid:true) then set up the results Data
        if (newErrors.isValid) {
            props.setResultsData({ ...formData, isValid: newErrors.isValid });
        }
    }

    function handleOnChange(e) {
        const newFormData = { ...formData, [e.target.id]:e.target.value, isValid:false, onSubmit:false};
        setFormData(newFormData);
    }
    
    return (
        <form className="form" onSubmit={submitForm}>
            
            <div className="form-row">
                <label htmlFor="firstname">First Name: </label>
                <input id="firstname" value={formData.onSubmit ? "" : formData.firstname} onChange={handleOnChange} autoFocus ref={firstnameRef}/>
            </div>
            <div className="error">
                <span>{errors.firstnameError ? "This Field is required!" : ""}</span>
            </div>
            <div className="form-row">
                <label htmlFor="lastname">Last Name: </label>
                <input id="lastname" value={formData.onSubmit ? "" : formData.lastname} onChange={handleOnChange} ref={lastnameRef}/>
            </div>
            <div className="error">
                <span>{errors.lastnameError ? "This Field is required!" : ""}</span>
            </div>
            
            <div className="form-row">
                <label htmlFor="email">Email: </label>
                <input id="email" value={formData.onSubmit ? "" : formData.email} onChange={handleOnChange} ref={emailRef}/>
            </div>
            <div className="error">
            <span>{errors.emailError ? "This Field is required! Fill in a proper email" : ""}</span>
            </div>
            <button type="submit" >Submit</button>
        </form>
    );
}
