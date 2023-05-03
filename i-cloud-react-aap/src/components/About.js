import noteContext from '../context/notes/noteContext';
import React, { useContext, useEffect } from 'react';
export default function About() {

    const a = useContext(noteContext)

    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])

    return (
        <ul className='container my-3'>
            <h2>Bio</h2>
            <li>{a.state.name}</li>
            <li>{a.state.class}</li>
            <li>{a.state.bio}</li>


        </ul>
    )
}