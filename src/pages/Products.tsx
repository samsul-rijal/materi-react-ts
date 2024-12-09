import MainTemplate from '../components/templates/MainTemplate'
import { Link } from 'react-router-dom'
import ProductList from '../components/organisms/ProductList'

function Products() {
  return (
    <MainTemplate pageTitle='Products'>
        <div className='w-3/4 mx-auto'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl my-5 font-semibold'>Product List</h1>
                <Link to={'/add-product'} className='bg-blue-600 px-5 py-2 rounded text-white'>Add Product</Link>
            </div>
            <ProductList />
        </div>
    </MainTemplate>
  )
}

export default Products