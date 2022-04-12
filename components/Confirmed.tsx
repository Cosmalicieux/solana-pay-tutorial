import { useEffect, useState } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"

export default function Confirmed() {
  const [percentage, setPercentage] = useState(0)
  const [text, setText] = useState('💸')

  useEffect(() => {
    const t1 = setTimeout(() => setPercentage(100), 100)
    const t2 = setTimeout(() => setText('✅'), 600)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ height: "20rem", width: "20rem" }}>
        <CircularProgressbar
          value={percentage}
          text={text}
          styles={buildStyles({
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
            pathTransitionDuration: 1.0
          })}
        />
      </div>
    </div>
  )
}