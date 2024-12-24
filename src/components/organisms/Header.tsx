import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const Header = () => {

    const { isLogin, user, dispatch } = useAuth()


    const navigate = useNavigate()

    const NavigateToLogin = () => {        
        navigate('/login')
    }

    return(
        <div className={`flex justify-between items-center px-3 h-16 bg-white mb-10 fixed top-0 z-50 w-full`}>
            <h1>Header</h1>
            <div className="flex gap-3">
                {
                    isLogin ? 
                    <>
                        <h3>Haii <span className="text-yellow-600">{user?.name}</span></h3>
                        <div>
                            <button onClick={() => dispatch({type: 'LOGOUT'})} className="text-red-500">Logout</button>
                        </div>
                    </>
                    :
                    <button onClick={NavigateToLogin} className="text-green-500">Login</button>
                }

                <ul className="flex gap-2">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    {isLogin && 
                        <>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/todo-app">Todo App</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users">User List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products">Products</NavLink>
                            </li>
                        </>
                    

                    }
                    
                </ul>
            </div>
        </div>
    )
}

export default Header