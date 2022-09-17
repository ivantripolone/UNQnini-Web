const ProductCard = (product: any) => {

    const productData = product.product;
    console.log(productData);

    return(
        <div className="card">
            <img src={productData.pictureUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{productData.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{'Precio: $'+productData.price}</li>
                        <li className="list-group-item">{'Descripcion: '+productData.description}</li>
                        <li className="list-group-item">{'En Stock: '+productData.stock}</li>
                    </ul>
                    <button type="button" className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    )


}

export default ProductCard;