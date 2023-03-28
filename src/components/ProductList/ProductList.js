import style from'./ProductList.module.css'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import {setProducts} from "../../redux/actions/productActions"
import Product from '../Products/Product'
import { useEffect } from 'react'

function ProductList() {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3001/products").catch((err) => {
      console.log("Err", err)
    })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  },[])

  // console.log("products:", products)
  return (
    <div className={style.App}>
      <Product/>
    </div>
  );
}

export default ProductList;