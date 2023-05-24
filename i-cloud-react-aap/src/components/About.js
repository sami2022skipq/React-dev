import noteContext from '../context/notes/noteContext';
import React, { useContext, useEffect, useState } from 'react';
import AllListings from './AllListings';
import { useNavigate } from 'react-router-dom';
import BallotedFilter from '../Filters/BallottedFilter';


export default function About() {


    let history = useNavigate()
    const context = useContext(noteContext)
    const { allListings, getAllListings } = context
    useEffect(() => {
        console.log('i fire once');
        if (!localStorage.getItem('token'))
            history("/login")
        else
            getAllListings()

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const [range, setRange] = useState(50 )

    const [ballotted, setballoted] = useState("true")
    const onChange = (e) => {
        setRange(Number(e.target.value))
        // console.log(`type of range is : ${typeof(range)} and value : ${range}`)
    }
      

    return (
        <>
            <div className="d-flex justify-content-center mb-3">
                <div className="p-2 w-100">
                    <label htmlFor="customRange1" className="form-label ">Price Range 0--{( range*1000000).toLocaleString()}</label>
                    <input type="range" className="form-range" min={0} max={100}  id="customRange1" onChange={onChange}></input>
                </div>
                <div className="p-2 w-100">
                    {/* Balloted filter from filters folder */}
                    <BallotedFilter setballoted={setballoted} />
                </div>
            </div>
            <div className='row my-3'>
                <h2>All Listings </h2>
                {
                    allListings.filter(n => n.totalPrice <= range * 1000000 && String(n.balloted) === ballotted) // filtering for Price Range
                        .map((note) => (
                            <AllListings key={note._id} note={note} />
                        ))
                }
            </div>
        </>


    )
}
