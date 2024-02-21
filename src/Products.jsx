import { useEffect } from "react";
import { useState } from "react";

function Products(){
    // let [name,setName] = useState("iPhone 14")
    // let [price,setPrice] = useState(84000)
    let [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then((res)=>{
               return res.json()
            })
            .then((data)=>{
                console.log(data)
                setProducts(data)
            })
    },[])
    return ( 
        <div className="products">
            {products.map((product)=>{
                return(
                    <div className="product" key={product.id}>
                        <div className="image-wrap">
                           <img src={product.image} alt="img" className="p-image"/>
                        </div>
                        <h2 className="p-title">{product.title}</h2>
                        <h3 className="p-price">Price :-{product.price}</h3>
                    </div>
                )
            })}
            {/* <h2>{name}</h2>
            <p>{price}</p>
            <button onClick={()=>{
                setName("Samsung M51")
            }}>Change Name</button>

            <button onClick={()=>{
                setPrice(18000)
            }}>Change Price</button> */}
        </div>
    )
}
export default Products;