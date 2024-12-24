import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import TodoApp from './pages/TodoApp';
import User from './pages/User';
import { useVerifyToken } from './hooks/useVerifyToken';
import { useEffect } from 'react';
import AddProduct from './pages/AddProduct';
import Products from './pages/Products';
import EditProduct from './pages/EditProduct';
import SellerRoute from './components/SellerRoute';
import ProductSeller from './pages/admins/ProductSeller';
import Dashboard from './pages/admins/Dashboard';

function App(){

  const { verifyToken } = useVerifyToken()
  
  useEffect(() => {
    verifyToken()
  }, [])

  return(
    <Router>
      <Routes>

        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          {/* yang ada di dalam sini dia outlet nya */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/users" element={<User />} />
          <Route path="/products" element={<Products />} />
          
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/add-product" element={<AddProduct />} />

          <Route path="/seller" element={<SellerRoute />} >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<ProductSeller />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  )
}

// router.get('/', getUser)

export default App;