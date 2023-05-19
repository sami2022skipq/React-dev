import noteContext from '../context/notes/noteContext';
import React, { useContext , useEffect} from 'react';
import AllListings from './AllListings';
import { useNavigate } from 'react-router-dom';


export default function About() {
   

    let history = useNavigate()
    const context = useContext(noteContext)
    const { allListings } = context
    useEffect(() => {
        console.log('i fire once');
        if (!localStorage.getItem('token')) 
            history("/login")
            
    },[]) // eslint-disable-line react-hooks/exhaustive-deps


    

    return (
        
                <div className='row my-3'>
                    <h2>All Listings </h2>
        
                    {allListings.map((note) => (

                         <AllListings key={note._id} note={note}/>
                    ))
                    }
                    
                </div>


            )}
            