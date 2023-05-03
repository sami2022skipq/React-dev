import noteContext from '../context/notes/noteContext';
import React, { useContext, useEffect } from 'react';
export default function About() {

    const a = useContext(noteContext)

    // useEffect(() => {
    //     a.update();
    //     // eslint-disable-next-line
    // }, [])

    return (
        <ul className='container my-3'>
            <h2>Bio</h2>

            <h1>{a.state[1].title}</h1>
            {a.state.map((note) => {

                return (
                    <>
                        <li>
                            <h5>{note._id}</h5>
                            <ul>
                                <li>

                                    <h5>Title : {note.title}</h5>
                                </li>
                                <li>

                                    {note.discription}
                                </li>
                                <li>
                                    {note.date}
                                </li>

                            </ul>

                        </li>
                    </>
                )


            })}


        </ul>
    )
}