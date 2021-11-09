import React from 'react';

function TextInput(props){
    const {inputType} = props;
    console.log(inputType);
    return (
        <div>
            <input type={inputType}/>
        </div>
    );
}
export default TextInput;