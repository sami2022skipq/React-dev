const AreaFilter = (props) => {
    const {setArea, area} =props
const onChange =(e)=>{
    setArea(Number(e.target.value) )


}

    return (
        <>
        <span class="input-group-text">Area in Marlas</span>
        <div class="form-outline">
            <input type="number" min ="5"   aria-label="First name" placeholder="Less than" class="form-control" onChange={onChange}  />
            
             <span class="text">Less than :'{area}' m</span>
            {/* <span class="input-group-text"> </span>
            <input type="number" min ="0" aria-label="Last name"  placeholder="To"class="form-control" /> */}
        </div>
        </>
    )

}
export default AreaFilter