import React, { useEffect, useState } from 'react'
import MainTemplateSeller from '../../components/templates/MainTemplateSeller'
import { useNavigate } from 'react-router-dom'
import api from '../../utils/api'
import { toast } from 'react-toastify'
import { Product } from '../../types'
import { Link } from 'react-router-dom'
import { HiPencilSquare } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

function ProductSeller() {

  const [products, setProducts] = useState<Product[] | null>(null) 
  const navigate = useNavigate()

  const getProducts = async() => {
      try {
          const response = await api.get("/product-seller")
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
    <MainTemplateSeller pageTitle='Products'>
      <div className='flex justify-between items-center'>
          <h1 className='text-xl my-5 font-semibold'>Product List</h1>
          <Link to={'/add-product'} className='bg-blue-600 px-5 py-2 rounded text-white'>Add Product</Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-16 py-3">
                          <span className="sr-only">Image</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Stock
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                {products?.map((item) => (
                  <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4">
                          <img src={item.image} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple iMac" />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {item.name}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {item.stock} pcs
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {item.price}
                      </td>
                      <td className="px-6 py-4 space-x-4">
                        <button 
                          onClick={() => handleEdit(item.id)} 
                          className="text-xl font-medium text-yellow-400 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors duration-200"
                        >
                          <HiPencilSquare />
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)} 
                          className="text-xl font-medium text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                        >
                          <MdDelete />
                        </button>
                      </td>

                  </tr>
                ))}
                  
              </tbody>
          </table>
      </div>
    </MainTemplateSeller>
  )
}

export default ProductSeller