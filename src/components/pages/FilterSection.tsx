import { useContext, useEffect, useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'
import { Product } from '../../types/product'
import Filter from '../molecules/Filter'

const sortOptions = [
  { value: 'PRICE_ASC', display: 'Menor precio' },
  { value: 'PRICE_DESC', display: 'Mayor precio' },
] as { value: string; display: string }[]

const FilterSection = () => {
  const { allProducts, setProducts } = useContext(ProductsContext)
  const [selectedLicence, setSelectedLicence] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedYear, setSelectedYear] = useState<string>('')
  const [selectedSearch, setSelectedSearch] = useState<string>('')
  const [selectedSort, setSelectedSort] = useState<string>('')

  useEffect(() => {
    const comparator = (a: Product, b: Product) => {
      switch (selectedSort) {
        case 'PRICE_ASC':
          return a.price - b.price
        case 'PRICE_DESC':
          return b.price - a.price
        default:
          return 0
      }
    }

    const complies = (selected: string, condition: boolean) => selected === '' || condition

    setProducts(
      allProducts
        .filter(
          (product) =>
            complies(selectedLicence, selectedLicence === product.license) &&
            complies(selectedCategory, selectedCategory === product.category) &&
            complies(selectedYear, selectedYear === product.year) &&
            complies(selectedSearch, product.name.toLowerCase().includes(selectedSearch.toLowerCase()))
        )
        .sort(comparator)
    )
  }, [allProducts, setProducts, selectedLicence, selectedCategory, selectedYear, selectedSearch, selectedSort])

  return (
    <div className='m-3 d-flex flex-column bg-nav'>
      <div className='d-flex flex-row justify-content-around gap-3 p-2'>
        <Filter
          selected={selectedLicence}
          setSelected={setSelectedLicence}
          title='Licencia'
          productField={(product) => product.license}
        />
        <Filter
          selected={selectedCategory}
          setSelected={setSelectedCategory}
          title='Categoría'
          productField={(product) => product.category}
        />
        <Filter
          selected={selectedYear}
          setSelected={setSelectedYear}
          title='Año'
          productField={(product) => product.year}
        />
      </div>
      <div className='d-flex flex-row justify-content-around gap-3 p-2'>
        <div className='d-flex flex-row align-items-baseline gap-2'>
          <div>Ordenar por:</div>
          <div>
            <select
              className='form-select'
              value={selectedSort}
              onChange={({ target: { value } }) => { setSelectedSort(value) }}
            >
              <option key={''} value={''} />
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.display}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='d-flex flex-row align-items-baseline gap-2'>
          <div>Buscar:</div>
          <div>
            <FormControl
              type='text'
              placeholder='Nombre...'
              value={selectedSearch}
              onChange={({ target: { value } }) => { setSelectedSearch(value) }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSection
