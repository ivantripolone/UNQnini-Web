import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

interface FilterProps {
  title: string
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

const Filter = ({ title, selected, setSelected }: FilterProps) => {
  const { setProducts, allProducts } = useContext(ProductsContext)

  return (
    <div className='d-flex flex-row align-items-baseline gap-2'>
      <div>{title}:</div>
      <div>
        <select
          className='form-select'
          value={selected}
          onChange={({ target: { value } }) => {
            setSelected(value)
            setProducts(value === '' ? allProducts : allProducts.filter((product) => product['name'] === value))
          }}
        >
          <option
            key={''}
            value={''}
          >
            {''}
          </option>
          {Array.from(new Set(allProducts.map((product) => product['name']))).map((element) => (
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
