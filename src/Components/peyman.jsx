import React from 'react'
import { Link } from 'react-router-dom';

const peyman = () => {
    return (
        <>
        <h1>PEYMAN</h1>
            <nav style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}>
                <Link to="/"> Home </Link> | {" "}
            </nav>
        </>
    )
}

export default peyman;