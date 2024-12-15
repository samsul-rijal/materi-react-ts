import { useEffect, useState } from 'react'
import { Product } from '../../types'
import api from '../../utils/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ProductList() {


    const [products, setProducts] = useState<Product[] | null>(null) 
    const navigate = useNavigate()

    const getProducts = async() => {
        try {
            const response = await api.get("/product")
            setProducts(response.data.data)
        } catch (error) {
            console.log(error);
            
        }
    }

    const handleEdit = (id: number) => {
        navigate(`/edit-product/${id}`)
    }

    const handleDelete = async(id: number) => {
        try {

            await api.delete(`/product/${id}`)
            toast.success('delete produk berhasil')
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts()
    }, []) // [] fungsinya agar dijalankan hanya sekali

  return (
    <div className='flex flex-col items-center min-h-screen'>
        <ul className='grid grid-cols-4 gap-3'>
            {products?.map((item) => (
                <li key={item.id} className='flex flex-col items-start shadow-md p-5 rounded'>
                    <img src={item.image} alt={item.name} className='w-40 h-40 rounded' />
                    <p className='text-gray-500'>{item.name}</p>
                    <p className='text-gray-500'>{item.price}</p>
                    <div className='w-full bg-yellow-400 px-4 py-2 rounded text-white text-center my-2'>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                    </div>
                    <div className='w-full bg-red-600 px-4 py-2 rounded text-white text-center my-2'>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductList