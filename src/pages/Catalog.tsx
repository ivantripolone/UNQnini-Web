import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../components/Api";
import ProductGrid from "../components/ProductGrid";

function Catalog() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const catalog = (event: { preventDefault: () => any; }) =>
            event.preventDefault();
            Api.getProducts().then((data) =>{
                setProducts(data.data);
            })
    }, [])

    return(
        <div className="Catalog">
            <div className="catalog-header">
                <h1>Productos</h1>
            </div>
            <div className="catalog-body">
                <ProductGrid products={products}/>
            </div>
        </div>
    )
}

export default Catalog;