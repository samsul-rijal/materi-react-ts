import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function SellerRoute() {
    const { isLogin, user } = useAuth()

    // console.log(user);
    return isLogin && user?.role === 'seller' ? <Outlet /> : <Navigate to='/login' />
}

export default SellerRoute