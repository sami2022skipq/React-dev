import noteContext from '../context/notes/noteContext';
import React, { useContext } from 'react';
import AllListings from './AllListings';


export default function About() {

    const context = useContext(noteContext)
    const { allListings } = context


    

    return (
        
                <div className='row my-3'>
                    <h2>All Listings </h2>
        
                    {allListings.map((note) => (

                         <AllListings key={note._id} note={note}/>
                    ))
                    }
                    
                </div>


            )}
            