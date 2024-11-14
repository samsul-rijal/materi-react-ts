import { useNavigate } from 'react-router-dom'
import Button from '../components/atoms/Button'
import FormField from '../components/molecules/FormField'
import MainTemplate from '../components/templates/MainTemplate'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

function Login() {

    const navigate = useNavigate()
    const authContext = useContext(AuthContext)
    const handleLogin = authContext?.handleLogin    

    const handleLoginAuth = () => {
        
        if(handleLogin){
            console.log('kondisis');
            
            handleLogin()
            navigate('/')
        }
    }

    return (
        <MainTemplate pageTitle='Login Page'>
            <form>
                <FormField label='Email' type='email' placeholder='masukan email' />
                <FormField label='Password' type='password' placeholder='masukan password' />
                <Button text='Login' onClick={handleLoginAuth} />
            </form>
        </MainTemplate>
    )
}

export default Login
