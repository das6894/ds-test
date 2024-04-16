import React from 'react';

const Button = (props) => {

    return (
        <button 
            className="dribbble-button"
            style={{
                backgroundColor: '#292929',    
                color: 'white',
                fontSize: '16px',
                borderRadius: '8px',
                padding: '4px 8px'               
            }}
            >
                {props.text}
        </button>
    )

}

export default Button;