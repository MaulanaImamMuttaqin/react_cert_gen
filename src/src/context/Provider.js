import React, { createContext, useReducer } from 'react'
// import { useHistory, useLocation } from 'react-router'
import authStates from './initialStates/authStates'
import auth from './reducers/auth'

export const GlobalContenxt = createContext()

export default function ContextProvider({ children }) {
    const [authState, authDispatch] = useReducer(auth, authStates)

    // const history = useHistory()
    // const location = useLocation()
    // const userData = {
    //     nama: "Maulana Imam Muttaqin",
    //     email: "maulanaimammuttaqin2000@gmail.com",
    // }
    // useEffect(() => {
    //     if (true) {
    //         authDispatch({ type: "SET_USER", payload: userData })
    //     }

    // }, [])
    return (
        <GlobalContenxt.Provider
            value={{
                authState, authDispatch
            }}
        >
            {children}
        </GlobalContenxt.Provider>
    )
}
