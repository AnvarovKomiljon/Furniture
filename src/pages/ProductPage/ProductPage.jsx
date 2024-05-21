import  { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function ProductPage() {
  const [product, setProduct] = useState({});
  const {productId} = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://test-ecommerce-gamma.vercel.app/products/${productId}`)
        setProduct(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  } , [ productId ]);

  return (
    <div>
<img src={product.img} alt="" />
<h1>{product.title}</h1>
<h2>{product.subtitle}</h2>
<p>{product.newPrice}</p>
<p>{product.oldPrice}</p>

      
    </div>
  )
}

export default ProductPage