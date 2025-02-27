import React from 'react';

function Input() {
    return (
        <div className="search-container">
            <div className="source-container">
                <h2>Source Name:</h2>
                <div className="input-field"></div>
            </div>
            <div className="source-container">
                <h2>Source Email:</h2>
                <div className="input-field"></div>
            </div>
            <button className="add-button">
                ADD
            </button>
        </div>
    );
}

export default Input;