
const initialState = null

interface SignIn {
    type: "signIn",
    payload: string
}
interface Signout {
    type: "signOut"
}

type Actions = SignIn | Signout

const userReducer = (state: string | null = initialState, action: Actions) => {
    switch (action.type) {
        case "signIn": return state = action.payload;
        case "signOut": return state = null;
        default: return state
    }
}

export default userReducer