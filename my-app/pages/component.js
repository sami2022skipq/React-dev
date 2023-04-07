// import { useState } from "react";
import  { useState } from 'react';
// const [conut, setCount] = useState(0)


export default function Component() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>this is an external Component witha a state number : {count}</h1>
            <button onClick={()=>
                    setCount((prev)=>prev+1)
            }>
                State Update
            </button>
        </>
    )
}


export function SecondComponenet({ name }) {
    return (
        <>

            <Time />
            <h1>
                I am  Second Component from {name}
            </h1>
        </>
    )
}


function Time() {
    return (
        <h1>Nested Component</h1>
    )
}