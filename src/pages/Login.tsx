import { useNavigate } from 'react-router-dom'
// import Button from '../components/atoms/Button'
// import FormField from '../components/molecules/FormField'
import MainTemplate from '../components/templates/MainTemplate'
import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../utils/api'
import { useAuth } from '../context/AuthContext'

function Login() {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const { dispatch } = useAuth()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            // setForm(e.target.value)
            [e.target.name]: e.target.value
        })
    }

    // console.log(form);

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault()

        if(!form.email.trim() || !form.password.trim() ) return

        try {
            
            const response = await api.post('/login', form)
            console.log(response);
            
            if(response.data.code === 201){

                dispatch({
                    type: 'LOGIN',
                    payload: {
                        user: response.data.data,
                        token: response.data.data.token
                    }
                })

                toast.success('login berhasil!')
                navigate('/')
            }
            

        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.message)
        }

    }

    // const notify = () => toast.success("Wow so easy!");
    

    return (
        <MainTemplate pageTitle='Login Page'>
            {/* <button onClick={notify}>test</button> */}
            <div className='flex flex-col items-center min-h-screen'>
                <h1 className='text-xl my-5 font-semibold'>Login Page</h1>
                <form onSubmit={handleLogin} className='w-96 shadow-md p-5 rounded-md'>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-gray-700 font-medium'>Email</label>
                        <input type="email" name='email' className='w-full px-4 py-2 rounded' onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-gray-700 font-medium'>Password</label>
                        <input type="password" name='password' className='w-full px-4 py-2 rounded' onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                        <button className='w-full bg-blue-600 px-4 py-2 rounded text-white'>Login</button>
                    </div>
                </form>
            </div>
        </MainTemplate>
    )
}

export default Login
