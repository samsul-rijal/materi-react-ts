import { useNavigate } from 'react-router-dom'
import Button from '../components/atoms/Button'
import FormField from '../components/molecules/FormField'
import MainTemplate from '../components/templates/MainTemplate'
import { useState } from 'react'

function Login() {

    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const handleLogin = () => {
        setIsLogin(true)
        navigate('/')
    }

    return (
        <MainTemplate pageTitle='Login Page' login={isLogin}>
            <form>
                <FormField label='Email' type='email' placeholder='masukan email' />
                <FormField label='Password' type='password' placeholder='masukan password' />
                <Button text='Login' onClick={handleLogin} />
            </form>
        </MainTemplate>
    )
}

export default Login
