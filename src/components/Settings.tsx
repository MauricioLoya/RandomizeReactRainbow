function Settings({
  changeColors,
  colorsProps
}: {
  changeColors: (colors: string[]) => void
  colorsProps: string[]
}) {
  return (
    <div className="grid grid-cols-5 lg:grid-cols-1 gap-3">
      {colorsProps.map((color, index) => {
        return (
          <div className="flex justify-between">
            <input
              onChange={e => {
                const newColors = [...colorsProps]
                newColors[index] = e.target.value
                changeColors(newColors)
              }}
              type="color"
              value={color}
              key={index}
              className="h-10 w-10"
            />
            {color}
          </div>
        )
      })}
    </div>
  )
}

export default Settings
