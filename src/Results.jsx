export default function Results(props) {
    return (
        <>
            <p>First Name: {props.isValid ? props.formData.firstname : ""}</p>
            <p>Last Name: {props.isValid ? props.formData.lastname: ""}</p>
            <p>Email: {props.isValid ? props.formData.email : ""}</p>
        </>
    );
}