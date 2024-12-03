import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Header = () => {

    const authContext = useContext(AuthContext)
    const isLogin = authContext?.isLogin    
    const handleLogout = authContext?.handleLogout    


    const navigate = useNavigate()

    const NavigateToLogin = () => {        
        navigate('/login')
    }

    return(
        <div className={`flex justify-between px-3`}>
            <h1>Header</h1>
            <div className="flex gap-3">
                <h3>Haii <span className="text-yellow-600">Name</span></h3>
                {
                    isLogin ? 
                    <div>
                        <button onClick={handleLogout} className="text-red-500">Logout</button>
                    </div>
                    :
                    <button onClick={NavigateToLogin} className="text-green-500">Login</button>
                }

                <ul className="flex gap-2">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todo-app">Todo App</NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header