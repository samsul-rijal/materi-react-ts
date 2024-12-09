import React, { useEffect, useState } from 'react'
import { Product } from '../../types'
import api from '../../utils/api'

function ProductList() {


    const [products, setProducts] = useState<Product[] | null>(null) 

    const getProducts = async() => {

        const response = await api.get("/product")
        console.log(response);      
        setProducts(response.data.data)
    }

    useEffect(() => {
        getProducts()
    }, []) // [] fungsinya agar dijalankan hanya sekali

  return (
    <div className='flex flex-col items-center min-h-screen'>
        <ul className='grid grid-cols-4 gap-3'>
            {products?.map((item) => (
                <li className='flex flex-col items-start shadow-md p-5 rounded'>
                    <img src={item.image} alt={item.name} className='w-40 h-40 rounded' />
                    <p className='text-gray-500'>{item.name}</p>
                    <p className='text-gray-500'>{item.price}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductList