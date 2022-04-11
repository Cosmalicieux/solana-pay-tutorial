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
      className="rounded border-none focus:ring-0 text-center bg-gray-200"
    />

  )
}
