import React from 'react'

export const Datacard = (props) => {
    
    function handleClick(){
        props.deleteCard(props.id);
    }

    return (
        <div className='data1'>
            <p>id: {props.id}</p>
            <p>name: {props.name}</p>
            <p>language: {props.language}</p>
            <p>framework: {props.framework}</p>
            <button style={{"margin-bottom":"15px"}} onClick={handleClick}>Delete</button>
        </div>
    )
}
