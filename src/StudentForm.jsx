import './StudentForm.css';
import { validate } from '@babel/types';

export default function StudentForm() {
    return (
        <form class="form">
            <InputField name="firstname" title="First Name"></InputField>
            <InputField name="lastname" title="Last Name"></InputField>
            <InputField name="email" title="Email"></InputField>
            <Button type="submit" title="Sumbit"></Button>
        </form>
    );
}

function InputField(props) {
    return (
        <div class="form-item">
            <label for={props.name}>{props.title} </label>
            <input id={props.name} ></input>
            <p id="error">error!</p>
        </div>

    );
}

function Button(props) {
    return (
        <>
            <button id={props.name} type={props.name}>{props.title}</button>
        </>
    );
}