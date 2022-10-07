import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import Filter from '../molecules/Filter'

const FilterSection = () => {
  const { allProducts, setProducts } = useContext(ProductsContext)
  const [selectedLicence, setSelectedLicence] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedYear, setSelectedYear] = useState<string>('')

  useEffect(() => {
    setProducts(
      allProducts.filter(
        (product) =>
          (selectedLicence === '' || selectedLicence === product.name) &&
          (selectedCategory === '' || selectedCategory === product.name) &&
          (selectedYear === '' || selectedYear === product.name)
      )
    )
  }, [allProducts, setProducts, selectedLicence, selectedCategory, selectedYear])

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
      <div className='d-flex flex-row justify-content-around'>
        <div>Ordenar por: asdasdassad</div>
        <div>Buscar: asdasdasd</div>
      </div>
    </div>
  )
}

export default FilterSection
