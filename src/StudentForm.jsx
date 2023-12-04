import './StudentForm.css';
import { useState } from 'react';

export default function StudentForm(props) {
    const [errors, setErrors] = useState({
        firstnameError: false,
        lastnameError: false,
        emailError: false,
        isValid: true,
        onSubmit: false,
    });
    
    function submitForm(event) {
        event.preventDefault();
        validateForm(props.formData);

    }

    function validateForm(formData) {
        console.log("before valid...",formData);
        
        let fName = formData.firstname;
        let lName = formData.lastname;
        let email = formData.email;
        let newErrors = { firstnameError: false, lastnameError: false, emailError: false, isValid:true, onSubmit:true };

        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const validText = (/^[a-zA-Z]+$/);

        if(!validEmail.test(email)){
            newErrors.emailError = true;
            newErrors.isValid = false;
        }
        if(!validText.test(fName)) {
            newErrors.firstnameError = true;
            newErrors.isValid = false;
        }
        if(!validText.test(lName)) {
            newErrors.lastnameError = true;
            newErrors.isValid = false;
        }
        console.log("after valid..",formData)
        setErrors(newErrors);
        if(newErrors.isValid === false){newErrors.onSubmit = false}
        props.setFormData({ ...formData, isValid: newErrors.isValid, onSubmit:newErrors.onSubmit });
    }

    function handleOnChange(e) {
        const newFormData = { ...props.formData, [e.target.id]:e.target.value };
        props.setFormData(newFormData);
    }
    
    return (
        <form className="form" onSubmit={submitForm}>
            <div className="form-row">
                <label htmlFor="firstname">First Name: </label>
                <input id="firstname" value={props.formData.onSubmit ? "" : props.formData.firstname} onChange={handleOnChange} autoFocus/>
            </div>
            <div className="error">
                <span>{errors.firstnameError ? "This Field is required!" : ""}</span>
            </div>
            <div className="form-row">
                <label htmlFor="lastname">Last Name: </label>
                <input id="lastname" value={props.formData.onSubmit ? "" : props.formData.lastname} onChange={handleOnChange} />
            </div>
            <div className="error">
                <span>{errors.lastnameError ? "This Field is required!" : ""}</span>
            </div>
            
            <div className="form-row">
                <label htmlFor="email">Email: </label>
                <input id="email" value={props.formData.onSubmit ? "" : props.formData.email} onChange={handleOnChange} />
            </div>
            <div className="error">
            <span>{errors.emailError ? "This Field is required! Fill in a proper email" : ""}</span>
            </div>
            <button type="submit" >Submit</button>
        </form>
    );
}