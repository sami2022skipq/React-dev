const AreaFilter = (props) => {
    const {setArea, area} =props
const onChange =(e)=>{
    setArea(Number(e.target.value) )


}

    return (
        <>
        <span className="input-group-text">Area in Marlas</span>
        <div className="form-outline">
            <input type="number" min ="5"   aria-label="First name" placeholder="Less than" className="form-control" onChange={onChange}  />
            
             <span className="text">Less than :'{area}' m</span>
            {/* <span className="input-group-text"> </span>
            <input type="number" min ="0" aria-label="Last name"  placeholder="To"className="form-control" /> */}
        </div>
        </>
    )

}
export default AreaFilter