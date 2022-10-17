import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { Product } from '../../types/product'

interface FilterProps {
  title: string
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  productField: (product: Product) => string
}

const Filter = ({ title, selected, setSelected, productField }: FilterProps) => {
  const { allProducts } = useContext(ProductsContext)

  return (
    <div className='d-flex flex-row align-items-baseline gap-2'>
      <div>{title}:</div>
      <div>
        <select
          className='form-select'
          value={selected}
          onChange={({ target: { value } }) => {
            setSelected(value)
          }}
        >
          <option
            key={''}
            value={''}
          >
            {''}
          </option>
          {Array.from(new Set(allProducts.map(product => productField(product)))).map((element) => (
            <option
              key={element}
              value={element}
            >
              {element}
            </option>
          ))}
          {allProducts.map((product) => product.name)}
        </select>
      </div>
    </div>
  )
}

export default Filter
