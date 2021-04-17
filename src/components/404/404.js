import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import "./404.css"

/**
* @author
* @function NotFound
**/

const NotFound = (props) => {
    return (
        <div className="notFoundImg">
            <div className="notFoundContent">
                <h1 className="notFound1">404</h1>
                <h1 className="notFound2">Destination Not Found</h1>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large">
                        HomePage
                    </Button>
                </Link>
            </div>
        </div>
    )

}

export default NotFound