import React from 'react'

const Component = () => {
  const [items, setItems] = React.useState<string[]>([])
  const [searchTerm, setSearchTerm] = React.useState('')

  const renderItems = () => {
    return items.map((item, index) => (
      <div key={index}>{item}</div>
    ))
  }

  const fetchData = async () => {
    const response = await fetch('/api/items')
    const data = await response.json()
    setItems(data)
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  const addItem = (newItem: string) => {
    items.push(newItem)
    setItems(items)
  }

  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {renderItems()}
    </div>
  )
}

export default Component


