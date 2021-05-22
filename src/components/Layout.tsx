import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UserLogOut } from '../../src/store/Actions/user-Action-Creators'


const Layout: React.FC = ({ children }) => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="sidebar">
                <Link to="/">
                    <>Dashboard</>
                </Link>
                <Link to="/department">
                    <>Department </>
                </Link>
                <button onClick={() => dispatch(UserLogOut())}>Logout</button>
            </div>
            <div className="content">
                {children}
            </div>
        </>
    )
}

export default Layout
