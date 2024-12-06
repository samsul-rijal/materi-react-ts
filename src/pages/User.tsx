import { useEffect, useState } from 'react'
import MainTemplate from '../components/templates/MainTemplate'
import axios from 'axios'
import api from '../utils/api'

interface User {
    id: number
    name: string
    email: string
    address: string
}

function User() {

    // memiliki 2 tipe, yang pertama null, yang kedua array
    const [users, setUsers] = useState<User[] | null>(null) 

    // fetch('http://localhost:8000/user')
    //   .then(response => response.json())
    //   .then(json => setUsers(json.data))

    const getUsers = async() => {

        const response = await api.get("/user")
        setUsers(response.data.data)
    }

    useEffect(() => {
        getUsers()
    }, []) // [] fungsinya agar dijalankan hanya sekali

    return (
        <MainTemplate pageTitle='User List'>
            <div className='mt-14'>
                <h1 className='text-2xl text-center mb-5'>User List</h1>
                {users && (
                    <div className='grid grid-cols-3 justify-items-center'>
                        {users.map((item) => (
                            <div key={item.id} className='shadow p-5 mb-5'>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.address}</p>
                            </div>
                        ))}
                    </div>
                )}
                
            </div>
        </MainTemplate>
    )
}

export default User
