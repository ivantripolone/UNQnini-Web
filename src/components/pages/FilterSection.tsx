import { useContext, useEffect, useState } from 'react'
import { FormControl } from 'react-bootstrap'
import { ProductsContext } from '../../context/ProductsContext'
import Filter from '../molecules/Filter'

const FilterSection = () => {
  const { allProducts, setProducts } = useContext(ProductsContext)
  const [selectedLicence, setSelectedLicence] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedYear, setSelectedYear] = useState<string>('')
  const [selectedSearch, setSelectedSearch] = useState<string>('')

  useEffect(() => {
    setProducts(
      allProducts.filter(
        (product) =>
          (selectedLicence === '' || selectedLicence === product.name) &&
          (selectedCategory === '' || selectedCategory === product.name) &&
          (selectedYear === '' || selectedYear === product.name) &&
          (selectedSearch === '' || product.name.toLowerCase().includes(selectedSearch.toLowerCase()))
      )
    )
  }, [allProducts, setProducts, selectedLicence, selectedCategory, selectedYear, selectedSearch])

  return (
    <div className='m-3 d-flex flex-column bg-nav'>
      <div className='d-flex flex-row justify-content-around gap-3 p-2'>
        <Filter
          selected={selectedLicence}
          setSelected={setSelectedLicence}
          title='Licencia'
        />
        <Filter
          selected={selectedCategory}
          setSelected={setSelectedCategory}
          title='Categoría'
        />
        <Filter
          selected={selectedYear}
          setSelected={setSelectedYear}
          title='Año'
        />
      </div>
      <div className='d-flex flex-row justify-content-around gap-3 p-2'>
        <div>Ordenar por: asdasdassad</div>
        <div className='d-flex flex-row align-items-baseline gap-2'>
          <div>Buscar:</div>
          <div>
            <FormControl
              type='text'
              placeholder='Nombre...'
              value={selectedSearch}
              onChange={({ target: { value } }) => {
                setSelectedSearch(value)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSection
