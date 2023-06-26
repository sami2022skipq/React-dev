import React from 'react'

const Footer = ({house , street, area , province ="Punjab"}) => {
    return (
        <div >
            <footer>
                   I live at house # {house }  street {street} {area} {province}
            </footer>
        </div>
    )
}

export default Footer