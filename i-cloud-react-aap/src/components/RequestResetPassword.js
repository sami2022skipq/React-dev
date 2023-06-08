const RequestResetPassword = () => {
    return (
        <div className="align-items-center">
            <div>
                <h3>Enter your Email to reset your password</h3>
            </div>

            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" />
                </div>
            </div>
            <div >

                <button type="submit" className="btn btn-primary">Reset</button>
            </div>

        </div>

    )
}
export default RequestResetPassword