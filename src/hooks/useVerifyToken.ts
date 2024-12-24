import { useAuth } from "../context/AuthContext"
import api from "../utils/api"


export const useVerifyToken = () => {

    const { dispatch } = useAuth()

    const verifyToken = async() => {
        const token = localStorage.getItem('token')

        if(token){
            try {
                
                const response = await api.get('/verify-token')

                dispatch({
                    type: 'LOGIN',
                    payload: {
                        user: response.data.data,
                        token: token
                    }
                })

            } catch (error) {
                console.log(error);
                dispatch({type: 'LOGOUT'})
            }
        }
    };

    return {verifyToken}

}