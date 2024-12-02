import { createContext, ReactNode, useState } from "react"

interface AuthContexType {
    isLogin: boolean;
    handleLogin: () => void;
    handleLogout: () => void;
}

export const AuthContext = createContext<AuthContexType | undefined>(undefined)

interface AuthContextProviderProps {
    children: ReactNode
}


export const AuthContextProvider = ({children}: AuthContextProviderProps) => {

    const [isLogin, setIsLogin] = useState<boolean>(Boolean(localStorage.getItem('isLogin')))


    const handleLogin = () => {
        console.log('context jalan');
        
        setIsLogin(true)
        localStorage.setItem('isLogin', 'true')
    }

    const handleLogout = () => {
        setIsLogin(false)
        localStorage.removeItem('isLogin')
    }
    
    return (
        <AuthContext.Provider value={{isLogin, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

