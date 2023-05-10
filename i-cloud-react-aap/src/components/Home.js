import Notes from "./Notes";

export default function Home(props) {

    return (
        <div className='my-3'>
            
            <div className="">
                <Notes showAlert= {props.showAlert} />

            </div>



        </div>
    )
}