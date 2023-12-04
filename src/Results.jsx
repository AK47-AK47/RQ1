export default function Results(props) {
    console.log("props.resultsData",props.resultsData);
    return (
        <>
            <p>First Name: {props.resultsData.isValid ? props.resultsData.firstname : ""}</p>
            <p>Last Name: {props.resultsData.isValid ? props.resultsData.lastname: ""}</p>
            <p>Email: {props.resultsData.isValid ? props.resultsData.email : ""}</p>
        </>
    );
}