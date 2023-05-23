import noteContext from '../context/notes/noteContext';
import React, { useContext, useEffect, useState } from 'react';
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

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const [range, setRange] = useState(0)
    const onChange =(e)=>{
        setRange({[e.target.name]: e.target.value})
            console.log(range)  
    }


    return (
        <>
            <label htmlFor="customRange1" className="form-label">Price Range</label>
            <input type="range" className="form-range"  min="0" max="100"id="customRange1" onChange={onChange}></input>
            <div className='row my-3'>
                <h2>All Listings </h2>

                {allListings.map((note) => (

                    <AllListings key={note._id} note={note} range={range} />
                ))
                }

            </div>
        </>


    )
}
