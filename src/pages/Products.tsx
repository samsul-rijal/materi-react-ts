import MainTemplate from '../components/templates/MainTemplate'
import ProductList from '../components/organisms/ProductList'

function Products() {
  return (
    <MainTemplate pageTitle='Products'>
        <div className='w-3/4 mx-auto'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl mb-3 font-semibold'>Product List</h1>
            </div>
            <ProductList />
        </div>
    </MainTemplate>
  )
}

export default Products