import { createContext, useContext, useState } from "react";
const StateContext = createContext({ 
    user:{},
    token:{}, 
    setUser:() => {}, 
    setToken:() => {}
})

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({
         name:"Moses Codes",
         email:"lazaromoses@gmail.com",
         imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    })
    const [token, setToken] = useState('123')

    return(
        <StateContext.Provider value={{user, setUser, token, setToken}}>
            {children}
        </StateContext.Provider>
    )
}
 // eslint-disable-next-line react-hooks/rules-of-hooks
 export const userStateContext = () => useContext(StateContext)