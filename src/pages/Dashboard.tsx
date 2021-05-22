import React from 'react'
import { State } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActionCreators } from '../store/Actions/action-Creators'

const Dashboard = () => {
    const user = useSelector((state: State) => state.user)
    const dispatch = useDispatch()

    const { UserSignIn, UserLogOut } = bindActionCreators(userActionCreators, dispatch)
    return (
        <div>

            <h1>Dashboard</h1>
            <p>User : {user}</p>
            <button onClick={() => UserSignIn("ashnaz")}>signin</button>
            <button onClick={() => UserLogOut()}>signin</button>

        </div>
    )
}

export default Dashboard
