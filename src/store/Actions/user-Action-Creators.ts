import { Dispatch } from 'redux'

export const UserSignIn = (data: string) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: "signIn",
            payload: data
        })
    }
}

export const UserLogOut = () => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: "signOut"
        })
    }
}