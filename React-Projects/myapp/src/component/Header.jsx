import React, { Fragment } from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom'
const Header = (props) => {
    return (
        <Fragment>
            <nav>
                <Link to='./'>Home</Link>
                <Link to='./contact'>Conatct</Link>
                <Link to='./about'>About</Link>
            </nav>
        </Fragment>
    )
}

export default Header