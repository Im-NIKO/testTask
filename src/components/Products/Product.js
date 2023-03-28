import style from'./Product.module.css';
import { useSelector } from 'react-redux';

function Product() {
  const products = useSelector((state) => state.allProducts.products)
  console.log(products)

  const renderList = products.map((product) => {
    const {id, name, count, size, weight, imageUrl} = product
    
    return (
      <div className={style.card} key={id}>
        <img className={style.img} src={imageUrl} alt={name}/>
        <p>{name}</p>
        <p>{count}</p>
        <p>{size.width}</p>
        <p>{size.height}</p>
        <p>{weight}</p>
      </div>
    )
  })

  return (
    // <div></div>
    <>{renderList}</>
  )
  
}

export default Product;