import './StudentForm.css';
import { useState } from 'react';

export default function StudentForm(props) {
    
    const [errors, setErrors] = useState({
        firstnameError: false,
        lastnameError: false,
        emailError: false,
        isValid: true,
    });
    
    console.log(errors);
    console.log(props.formData);

    //props.setIsValid(errors.isValid);

    function submitForm(event) {
        event.preventDefault();
        validateForm(props.formData);
    }

    function validateForm(formData) {
        console.log(formData);
        
        let fName = formData.firstname;
        let lName = formData.lastname;
        let email = formData.email;
        let newErrors = { firstnameError: false, lastnameError: false, emailError: false, isValid:true };

        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const validText = (/^[a-zA-Z]+$/);

        if(!validEmail.test(email)){
            console.log("email error");
            newErrors.emailError = true;
            newErrors.isValid = false;
        }
        if(!validText.test(fName)) {
            console.log("firstNAme error");
            newErrors.firstnameError = true;
            newErrors.isValid = false;
        }
        if(!validText.test(lName)) {
            console.log("LastName error");
            newErrors.lastnameError = true;
            newErrors.isValid = false;
        }
        console.log("onError valid..",formData)
        setErrors(newErrors);
        props.setFormData({ ...formData, isValid: newErrors.isValid });
    }

    function handleOnChange(e) {
        const newFormData = { ...props.formData, [e.target.id]:e.target.value };
        props.setFormData(newFormData);
    }


    return (
        <form className="form" onSubmit={submitForm}>
            <div className="form-item">
                <label htmlFor="firstname">First Name: </label>
                <input id="firstname" value={props.formData.firstname} onChange={handleOnChange} />
            </div>
            <span className="error">{errors.firstnameError ? "This Field is required!" : ""}</span>
            <div className="form-item">
                <label htmlFor="lastname">Last Name: </label>
                <input id="lastname" value={props.formData.lastname} onChange={handleOnChange} />
            </div>
            <span className="error">{errors.lastnameError ? "This Field is required!" : ""}</span>
            <div className="form-item">
                <label htmlFor="email">Email: </label>
                <input id="email" value={props.formData.email} onChange={handleOnChange} />
            </div>
            <span className="error">{errors.emailError ? "This Field is required! Fill in a proper email": ""}</span>
            <button type="submit" >Submit</button>
        </form>
    );
}