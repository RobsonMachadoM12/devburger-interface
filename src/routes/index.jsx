import { Route, Routes } from 'react-router-dom';


import { Cart, Checkout, EditProduct, Home, Login, Menu, NewProduct, Orders, Products, Register } from '../containers';
import { CompletPayment } from '../components/CompletPayment';
import { UserLayout } from '../components/layouts/UserLayout';
import { AdminLayout } from '../components/layouts/AdminLayout';


export function Router() {

    return (
        <Routes>

            <Route path='/' element={<UserLayout />} >
                <Route path='/' element={<Home />} />
                <Route path='/cardapio' element={<Menu />} />
                <Route path='/carrinho' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/complite' element={<CompletPayment />} />
            </Route>

            <Route path='/admin' element={<AdminLayout />}  >
                <Route path='/admin/pedidos' element={<Orders />} />
                <Route path='/admin/novo-produto' element={<NewProduct />} />
                <Route path='/admin/editar-produto' element={<EditProduct />} />
                <Route path='/admin/produtos' element={<Products />} />
            </Route>
            
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Register />} />
        </Routes>

    );
}
