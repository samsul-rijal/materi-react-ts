import { useNavigate, useParams } from 'react-router-dom'
// import Button from '../components/atoms/Button'
// import FormField from '../components/molecules/FormField'
import MainTemplate from '../components/templates/MainTemplate'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../utils/api'
import MainTemplateSeller from '../components/templates/MainTemplateSeller'

function EditProduct() {

    const [form, setForm] = useState({
        name: '',
        price: 0,
        stock: 0,
        image: null,
    })

    const navigate = useNavigate()
    const {id} = useParams()
    // console.log(id);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        // console.log(e.target.files);
        // console.log(e.target?.files?.[0]);
    
        setForm({
            ...form,
            // setForm(e.target.value)
            [e.target.name]: e.target.type === "file" ? e.target?.files?.[0] : e.target.value
        })        
    }

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()

        try {
            // console.log(form.image);
            const uploadData = new FormData();
            uploadData.append('name', form.name)
            uploadData.append('price', form.price.toString())
            uploadData.append('stock', form.stock.toString())
            if(form.image){
                uploadData.append('image', form.image)
            }
            
            const response = await api.patch(`/product/${id}`, uploadData)
            console.log(response);
            navigate('/seller/product')
            toast.success('Produk berhasil diperbarui')
            
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.message)
        }

    }    

    const getProducts = async() => {
        
        try {
            const response = await api.get(`/product/${id}`)
            console.log(response);      
            setForm(response.data.data)
            
        } catch (error) {
            console.log(error);
                        
        }
    }
    
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <MainTemplateSeller pageTitle='Login Page'>
            <div className='flex flex-col items-center min-h-screen'>
                <h1 className='text-xl my-5 font-semibold'>Product</h1>
                <form onSubmit={handleSubmit} className='w-96 shadow-md p-5 rounded-md'>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-gray-700 font-medium'>Name</label>
                        <input type="text" name='name' value={form.name} className='w-full px-4 py-2 rounded' onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-gray-700 font-medium'>Price</label>
                        <input type="number" name='price' value={form.price} className='w-full px-4 py-2 rounded' onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-gray-700 font-medium'>Stock</label>
                        <input type="number" name='stock' value={form.stock} className='w-full px-4 py-2 rounded' onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block text-gray-700 font-medium'>Image</label>
                        <input type="file" name='image' className='w-full px-4 py-2 rounded' onChange={handleChange} />
                    </div>
                    <div className='mb-4'>
                        <button className='w-full bg-blue-600 px-4 py-2 rounded text-white'>Simpan</button>
                    </div>
                </form>
            </div>
        </MainTemplateSeller>
    )
}

export default EditProduct
