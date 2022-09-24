interface PurchaseSectionProps {
  title: string
  children: React.ReactNode
}

const PurchaseSection = ({ title, children }: PurchaseSectionProps) => {
  return (
    <div
      className='align-self-center bg-light d-flex flex-column'
      style={{ width: '80%' }}
    >
      <h2 style={{ padding: '15px' }}>{title}</h2>
      <div style={{ padding: '15px' }}>{children}</div>
    </div>
  )
}

export default PurchaseSection
