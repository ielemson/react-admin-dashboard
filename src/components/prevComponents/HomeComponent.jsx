import React,{useEffect} from 'react'
import HeroComponent from './HeroComponent'
import api from "../../api/api"
import { useDispatch } from 'react-redux'
import { addProducts } from '../../features/products/productSlice'

const HomeComponent = ()=> {
  const dispatch = useDispatch();
  const fetchProducts = async ()=>{
    const response = await api.get('/products').catch(error=>console.log(error))
    dispatch(addProducts(response.data))
  }
  const user = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
   fetchProducts()
   console.log(user)
  }, [fetchProducts])
  
  return (
  <HeroComponent />
  )
}

export default HomeComponent