import ProductTable from '../molecules/ProductTable'

const Cart = () => {
  const total = ''

  return (
    <div>
      <div>
        <ProductTable products={[]} />
      </div>
      <div className='CartFooter'>
        <h1>Total:</h1>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default Cart
