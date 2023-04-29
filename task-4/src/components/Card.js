import React, { useState } from 'react'

export const Card = (props) => {

    const [newNote,setNewNote] = useState({
        id: "",
        name: "",
        language: "",
        framework: ""
    })

    function handleChange(e){
        const {name,value} =e.target;
        setNewNote((prevNote)=>{
            return {
                ...prevNote,
                [name]:value
            };
        })
    }


    function handleClick(e) {
        
        props.onAdd(newNote);
        setNewNote({
          id: "",
          name: "",
          language: "",
          framework: ""
        });
        e.preventDefault();
    }

    return (
        <div className='card1'>
            <form>
                <input
                    name="name"
                    value={newNote.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <input
                    name="id"
                    value={newNote.id}
                    onChange={handleChange}
                    placeholder="ID"
                />
                <input
                    name="language"
                    value={newNote.language}
                    onChange={handleChange}
                    placeholder="Language"
                />
                <input
                    name="framework"
                    value={newNote.framework}
                    onChange={handleChange}
                    placeholder="Framework"
                />
                <button onClick={handleClick} className='btn1'>Add Data</button>
            </form>
        </div>
    )
}
