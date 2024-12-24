import { useEffect, useState } from 'react'
import { Product } from '../../types'
import api from '../../utils/api'

function ProductList() {


    const [products, setProducts] = useState<Product[] | null>(null) 

    const getProducts = async() => {
        // console.log('jalan');
        
        try {
            const response = await api.get("/product")
            setProducts(response.data.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    
    useEffect(() => {
        getProducts()
    }, []) // [] fungsinya agar dijalankan hanya sekali

  return (
    <div className='flex flex-col items-center min-h-screen bg-white rounded-md pt-5'>
        <ul className='grid grid-cols-4 gap-3'>
            {products?.map((item) => (
                <li key={item.id} className='flex flex-col items-start shadow-md p-5 rounded'>
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