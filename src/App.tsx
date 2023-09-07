import { useEffect, useState } from 'react'
import GridColors from './components/GridColor'
import Settings from './components/Settings'

function App() {
  const [colors, setColors] = useState([
    '#A29B84',
    '#B2AB91',
    '#C4BC9F',
    '#D8CFAF',
    '#E6B89C',
    '#F374AE',
    '#32533D',
    '#0CF2DB',
    '#45634F',
    '#56715F'
  ])

  useEffect(() => {
    genetateRandomColors()
  }, [])

  const genetateRandomColors = () => {
    const newColors = [...colors]
    newColors.forEach((color, index) => {
      const newColor = Math.floor(Math.random() * 16777215).toString(16)
      newColors[index] = `#${newColor}`
    })
    setColors(newColors)
  }

  return (
    <div className="container mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <Settings changeColors={setColors} colorsProps={colors} />
        <div className="flex justify-end mt-3">
          <button
            onClick={() => genetateRandomColors()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Random Colors
          </button>
        </div>
      </div>
      <GridColors indexColors={colors} />
    </div>
  )
}

export default App
