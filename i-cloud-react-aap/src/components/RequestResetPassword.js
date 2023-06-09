import { useState } from "react"



const RequestResetPassword = () => {
    
    const [email, setEmail] = useState("")
   
    
    return (
        <div className="container">
            <div className="modal fade" id="modalSubscriptionForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Reset Password</h4>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body mx-3">
                            
                            <div className="md-form mb-4">
                                <i className="fas fa-envelope prefix grey-text"></i>
                                <input type="email" id="form2" className="form-control validate" name= "email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <label data-bs-error="wrong" data-bs-success="right" htmlFor="form2">Your email</label>
                            </div>

                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-indigo">Reset <i className="fas fa-paper-plane-o ml-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <a href="" className="btn btn-default btn-rounded mb-4" data-bs-toggle="modal" data-bs-target="#modalSubscriptionForm">Forgot Password</a>
            </div>

        </div>

    )
}
export default RequestResetPassword