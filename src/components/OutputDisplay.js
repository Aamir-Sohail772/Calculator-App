import React from 'react'
import '../App.css';
const OutputDisplay = ({input,output,error}) => {
    return (
        <div className="output-container">
            {input}
            {output}
            {error}
        </div>
    )
}

export default OutputDisplay
