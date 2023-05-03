import Notes from "./Notes";

export default function Home() {
    
    return (
        <div className='my-3'>
            <div className='my-3'>

                <h2> Add a Note</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Note</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword3" className="form-label">Details</label>
                        <input type="password" className="form-control" id="exampleInputPassword3" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="">
                <Notes/>

            </div>


           
        </div>
    )
}