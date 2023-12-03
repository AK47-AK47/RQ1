import './StudentForm.css';
import { useState } from 'react';

export default function StudentForm(props) {
    
    const [errors, setErrors] = useState({
        firstnameError: false,
        lastnameError: false,
        emailError: false,
    });
    
    console.log(errors);
    console.log(props.formData);

    function submitForm() {
        //validate
    }

    function validateForm(event) {
        event.preventDefault();
        
        console.log(props.formData);
        
        let fName = props.formData.firstname;
        let lName = props.formData.lastname;
        let email = props.formData.email;
        let newErrors = { firstnameError: false, lastnameError: false, emailError: false };

        const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const validText = (/^[a-zA-Z]+$/);

        if(!validEmail.test(email)){
            console.log("email error");
            newErrors.emailError = true;
        }
        if(!validText.test(fName)) {
            console.log("firstNAme error");
            newErrors.firstnameError = true;
        }
        if(!validText.test(lName)) {
            console.log("LastName error");
            newErrors.lastnameError = true;
        }
        setErrors(newErrors);
        //change isvalid somehow....
    }

    function handleOnChange(e) {
        
        const newFormData = { ...props.formData, [e.target.id]:e.target.value };
        
        props.setFormData(newFormData);
    }


    return (
        <form className="form" onSubmit={validateForm}>
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