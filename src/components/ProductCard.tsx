const ProductCard = (product: any) => {

    return(
        <div className="card">
            <img src={product.pictureUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{product.price}</li>
                        <li className="list-group-item">{product.description}</li>
                        <li className="list-group-item">{product.stock}</li>
                    </ul>
                <a href="#" className="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    )


}

export default ProductCard;