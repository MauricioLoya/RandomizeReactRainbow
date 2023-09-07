import { useEffect, useState } from 'react'

function GridColors({ indexColors }: { indexColors: string[] }) {
  const [stringValue, setStringValue] = useState<string>(
    '389457394857394865192869842359348298347928347745637862987349283746457364591827391823787456287492837487456921834729875637465298374928473645347298347234537645892734982746456827364928347475387456394857982734982749827390482739482734029347293847874563847692834729348783475628976198279273648765834592837492837486745389457938742956289765982376458324565730489579218371982738975693847538745639845763947856387456394856374956647348345445231123456789584004840378384573645934875i837692837492834729786492834692836492386420348720387140827301872301874837486384710283610386837483790273402897340928374018734018374908347538974659283472975638756298347293847329475643875629834792475648762938472930847397456483765298374928374575687294582374928745845768374629872938478756438576293847298347298474653875629837492834729374862736452837462893472936426354283746928347928347'
  )

  useEffect(() => {
    const interval = setInterval(() => {
      regenerateStringValue()
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const generateRandomNumber = () => Math.floor(Math.random() * 10)
  const regenerateStringValue = () => {
    const newStringValue = stringValue
      .split('')
      .map(() => generateRandomNumber())
      .join('')
    setStringValue(newStringValue)
  }

  return (
    <div className="flex gap-1 flex-wrap">
      {stringValue
        .toString()
        .replace('.', '')
        .split('')
        .map((digit, index) => {
          const color = indexColors[parseInt(digit)]
          return (
            <div
              key={index}
              className="h-10 w-10"
              style={{ backgroundColor: color }}
            ></div>
          )
        })}
    </div>
  )
}
export default GridColors
