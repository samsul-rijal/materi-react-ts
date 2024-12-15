import { useAuth } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoute() {
    // const authContext = useContext(AuthContext)
    // const isLogin = authContext?.isLogin    
    // const isLogin = true
    const { isLogin } = useAuth()
  console.log(isLogin);
  
  return isLogin ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
