import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addProducts, getProducts} from '../features/products/productSlice'
import api from "../api/api"


const ProductsComponent = () => {
  
    const productsData = useSelector((state) => state.products);
    const [productsArr,setProductArr] = useState([])
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await api.get('/products').catch(error => console.log(error))
        dispatch(addProducts(response.data))
    }

    console.log(productsArr)
   


    useEffect(() => {
        return() => {
            fetchProducts()
            setProductArr(productsData)
        }
    }, [])


    return (

        <div className="py-16">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mt-28 mb-28">
                <div className="mb-12 space-y-2">
                    <span className="text-cyan-600">Products</span>
                    <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Sharing is Caring</h2>
                    <p className="lg:w-6/12">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p>
                </div>
             
             </div>
        </div>

    )
}

export default ProductsComponent
