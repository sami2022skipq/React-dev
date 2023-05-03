import { useState } from "react";
import NoteContext from "./noteContext";


const NoteStatus = (props) => {
    const s1 = {
        "name": "Abdul Sami",
        "class": "BS CS",
        "Bio": ""
    }
    const [state, setState] = useState(s1)

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Abdul Sami Malik",
                "class": "BS CS Programmer",
                "bio": " Tunay mere jana kabhi nahi jaan aishq there dard mera han "

            })

        }, 3000);
    }


    return (

        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteStatus