import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react"


interface User {
    id: number
    name: string
    email: string
}

interface AuthState {
    user: User | null
    isLogin: boolean
}

// auth type action
type AuthAction = { type: 'LOGIN'; payload: {user: User; token: string} } 
                | { type: 'LOGOUT' };

//  initial state
const initialState: AuthState = {
    user: null,
    isLogin: false
}

// reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'LOGIN':      
        localStorage.setItem('token', action.payload.token)

        return {
            user: action.payload.user,
            isLogin: true
        }

      case 'LOGOUT':
        localStorage.removeItem('token')
        return {
            user: null,
            isLogin: false
        }
      default:
        return state;
    }
};

// context type
interface AuthContextType extends AuthState {
    dispatch: Dispatch<AuthAction>;
}

// membuat context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// auth procider props
interface AuthProviderProps {
    children: ReactNode
}

export const AuthContextProvider = ({children}: AuthProviderProps) => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

// hook context
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if(!context) {
        throw new Error('error use context')
    }

    return context
}