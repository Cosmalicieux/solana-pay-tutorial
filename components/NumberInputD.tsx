import { useState } from "react"

interface Props {
  name: string,
}

export default function NumberInputD({ name }: Props) {
  const [number, setNumber] = useState(0)

  return (
    
    <input
      type="number"
      name={name}
      value={number}
      onChange={e => setNumber(Number(e.target.value))}
      className="placeholder-slate-400 border-2 border-gray-200 rounded-md text-center"
      placeholder="0.01"
    />

  )
}
