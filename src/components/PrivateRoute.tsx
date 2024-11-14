import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute() {
    const authContext = useContext(AuthContext)
    const isLogin = authContext?.isLogin    

  return isLogin ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
