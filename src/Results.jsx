export default function Results(props) {
    return (
        <>
            <p>First Name: {props.formData.isValid ? props.formData.firstname : ""}</p>
            <p>Last Name: {props.formData.isValid ? props.formData.lastname: ""}</p>
            <p>Email: {props.formData.isValid ? props.formData.email : ""}</p>
        </>
    );
}