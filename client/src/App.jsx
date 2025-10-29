import React from 'react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import { TbMarquee } from 'react-icons/tb'
import './App.css'
import NewArrival from './components/NewArrival'
import Summer from './components/Summer'
import Winter from './components/Winter'
import Boys from './components/Boys'
import Girls from './components/Girls'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'

export default function App() {
  return (
    <div className='relative overflow-hidden'>
      <section>
      <div className='bg-black text-white flex justify-center py-2 '> 
        <p className='flash-message bg-[#3b0424b0] text-white font-bold sm:text-xl text-[10px] px-2 py-1'> Warming Hearts Nationwide | Trusted by 1,500+ Moms </p>
        </div> 
      </section>
       {/* <div className="flash-message p-2 flex justify-start w-20 rounded-full font-medium text-2xl bg-white absolute left-0 top-0">50% OFF</div> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/collection' element={ <Collections/> }/>
        <Route path='/product/:productId' element={ <Product/> }/>
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/new-arival' element={ <NewArrival/> }/>
        <Route  path='/summer' element={ <Summer/> }/>
        <Route  path='/winter' element={ <Winter/> }/>
        <Route  path='/boys' element={ <Boys/> }/>
        <Route  path='/girl' element={ <Girls/> }/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/order' element={<Orders/>}/>

      </Routes>
     <section>
      <Footer/>
     </section>
    </div>
  )
}