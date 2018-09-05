
import React from 'react'

const Validation = (props)=> {
        let validationMessage = 'Text lenght is too short';

        if(props.inputLength >=5)
        {
            validationMessage ='Text lenght is long';
        }
        return (
            <div onClick={props.clicked}>
                <p>{validationMessage}</p>
            </div>
        );
}

export default Validation;