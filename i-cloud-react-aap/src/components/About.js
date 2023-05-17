import noteContext from '../context/notes/noteContext';
import React, { useContext } from 'react';
import NoteItem from './NoteItem';

export default function About() {

    const context = useContext(noteContext)
    const { notes } = context


    // useEffect(() => {
    //     a.update();
    //     // eslint-disable-next-line
    // }, [])

    return (
        
                <div className='row my-3'>
                    <h2>About Notes </h2>
        
                    {notes.map((note) => (

                         <NoteItem key={note._id} note={note}/>
                    ))
                    }
                    
                </div>


            )}
        