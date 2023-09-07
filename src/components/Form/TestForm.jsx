import { useState } from "react";

const TestForm = () => {
    const [value, setValue] = useState('');
    const [optionValue, setOptionValue] = useState('');

    const handleChange = (event) => {
        
        setValue(event.target.value);
    }

    const handleOptionChange = (event) => {
        setOptionValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + value + ' and the selected option is: ' + optionValue);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <br />
            <label>
                Select an option:
                <select value={optionValue} onChange={handleOptionChange}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}
export default TestForm;