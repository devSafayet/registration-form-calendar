import React from 'react';

const Input = ({ name, label, type }) => {
    return (
        <div>
            <div class="input-group">
                <label class="label">{label}</label>
                <input class="input--style-4" type={type} name={name} />
            </div>
        </div>
    );
};

export default Input;