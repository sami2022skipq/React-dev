import noteContext from '../context/notes/noteContext';
import React, { useContext } from 'react';
export default function About() {

    const a = useContext(noteContext)

    // useEffect(() => {
    //     a.update();
    //     // eslint-disable-next-line
    // }, [])

    return (
        <ul className='container my-3'>
            <h2>Bio</h2>

            {a.notes.map((note) => {
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
                );
            })}


        </ul>
    )
}