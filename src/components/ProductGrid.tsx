import ProductCard from "./ProductCard";

const ProductGrid = (props: { products: any; }) => {

    const products = props.products;
    console.log(products);

    return(
        <div className="container-fluid">
            <div className="row row-cols-4">
                {products.map( (product: any) => (
                    <div>
                    <ProductCard product={product}/>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default ProductGrid;