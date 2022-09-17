import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsService from "../../services/productsService";
import { Product } from "../../types/product";

const ProductPage = () => {

    const {productId} = useParams();
    const [product, setProduct] = useState<Product[]>()

    useEffect(() => {
        const product = (event: { preventDefault: () => any; }) => 
            event.preventDefault();
            productsService.getProduct(productId!!).then((data) => {
                setProduct(data)
              })
            }, [])


    return(
        <div>
            <p>Producto</p>
        </div>
    )
}

export default ProductPage;