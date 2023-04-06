export  default function Component(){
    return (
        <h1>this is an external Component</h1>
    )
}


export function SecondComponenet({name}){
    return (
        <>
        
            <Time/>
            <h1>
                I am  Second Component from {name}
            </h1>
        </>
    )
}   


function Time (){
    return(
        <h1>Nested Component</h1>
    )
}