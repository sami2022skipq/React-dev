import { useState } from "react"
export default function TextForm() {
    const [text, setText] = useState("Enter text here")
    function handelClickUpper() {

        setText(prev => prev.toUpperCase())
    }
    function handelClickLower() {

        setText(prev => prev.toLocaleLowerCase())
    }
    function restClick() {
        setText(prev => prev="")
    }
    function changeText(event) {
        // console.log("Chang text")
        setText(event.target.value)
    }
    return (
        <>
            <div className="container">
                <div className="input-group mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows={8} onChange={changeText} />
                </div>
                <button type="btn" className="btn btn-danger mx-10" onClick={handelClickUpper}>Convert To Uppercase</button>
                <button type="btn" className="btn btn-danger mx-10" onClick={handelClickLower}>Convert To Lowercase</button>
                <button type="btn" className="btn btn-danger mx-10" onClick={restClick}>Clear Text</button>
            </div>
            <div className="container my-5">
                <h2>
                    Text Summary
                </h2>
                <p>
                    Total number of words are : <b>{text.split(" ").length} </b>
                    , Total number of chracters are : <b>{text.length}</b>
                </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div >


        </>

    )
}