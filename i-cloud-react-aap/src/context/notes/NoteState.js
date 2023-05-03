import { useState } from "react";
import NoteContext from "./noteContext";


const NoteStatus = (props) => {
    const s1 = [
        {
          "_id": "644a79f872ac59026391a3e3",
          "user": "6448e99999f6bd8b41aae3d5",
          "title": "Evening Routine updated ",
          "discription": " updated Go for a walk, Eat dinner before 7, Plan the next day tasks",
          "tag": "personal",
          "date": "2023-04-27T13:34:48.734Z",
          "__v": 0
        },
        {
          "_id": "644a8a52fce16cf3b9f7bd11",
          "user": "6448e99999f6bd8b41aae3d5",
          "title": "Moring  Routine",
          "discription": "Go for a walk, Eat breakfast  before 7, Plan the  day tasks",
          "tag": "personal",
          "date": "2023-04-27T14:44:34.205Z",
          "__v": 0
        }
      ]
    const [state, setState] = useState(s1)

    


    return (

        <NoteContext.Provider value={{ state, setState }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteStatus