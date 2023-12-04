import './StudentForm.css';
import { useState, useRef } from 'react';

export default function StudentForm(props) {
    const [errors, setErrors] = useState({
        firstnameError: false,
        lastnameError: false,
        emailError: false,
        isValid: true,
        //onSubmit: false,
    });
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    
    function submitForm(event) {
        event.preventDefault();
        validateForm(props.formData);
    }

    function validateForm(formData) {
        console.log("before valid...",formData);
        
        let fName = formData.firstname;
        let lName = formData.lastname;
        let email = formData.email;
        let newErrors = { firstnameError: false, lastnameError: false, emailError: false, isValid:true,};

        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const validText = (/^[a-zA-Z]+$/);
        let onSubmitStatus = true;

        if (!validEmail.test(email)) {
            newErrors.emailError = true;
            newErrors.isValid = false;
            emailRef.current.focus();
            emailRef.current.style.border = "1px solid red";
        }
        else {
            emailRef.current.style.border = "";
        }
        if (!validText.test(lName)) {
            newErrors.lastnameError = true;
            newErrors.isValid = false;
            lastnameRef.current.focus();
            lastnameRef.current.style.border = "1px solid red";
        }
        else {
            lastnameRef.current.style.border = "";
        }
        if (!validText.test(fName)) {
            newErrors.firstnameError = true;
            newErrors.isValid = false;
            firstnameRef.current.focus();
            firstnameRef.current.style.border = "1px solid red";
        }
        else {
            firstnameRef.current.style.border = "";
         }
        
        console.log("after valid..", formData)
        
        if (newErrors.isValid === false) { onSubmitStatus = false }
        setErrors(newErrors);
        if (onSubmitStatus){ firstnameRef.current.focus();}
        props.setFormData({ ...formData, isValid: newErrors.isValid, onSubmit:onSubmitStatus });
    }

    function handleOnChange(e) {
        const newFormData = { ...props.formData, [e.target.id]:e.target.value };
        props.setFormData(newFormData);
    }
    
    return (
        <form className="form" onSubmit={submitForm}>
            
            <div className="form-row">
                <label htmlFor="firstname">First Name: </label>
                <input id="firstname" value={props.formData.onSubmit ? "" : props.formData.firstname} onChange={handleOnChange} autoFocus ref={firstnameRef}/>
            </div>
            <div className="error">
                <span>{errors.firstnameError ? "This Field is required!" : ""}</span>
            </div>
            <div className="form-row">
                <label htmlFor="lastname">Last Name: </label>
                <input id="lastname" value={props.formData.onSubmit ? "" : props.formData.lastname} onChange={handleOnChange} ref={lastnameRef}/>
            </div>
            <div className="error">
                <span>{errors.lastnameError ? "This Field is required!" : ""}</span>
            </div>
            
            <div className="form-row">
                <label htmlFor="email">Email: </label>
                <input id="email" value={props.formData.onSubmit ? "" : props.formData.email} onChange={handleOnChange} ref={emailRef}/>
            </div>
            <div className="error">
            <span>{errors.emailError ? "This Field is required! Fill in a proper email" : ""}</span>
            </div>
            <button type="submit" >Submit</button>
        </form>
    );
}