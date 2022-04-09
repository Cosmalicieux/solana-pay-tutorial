import { useState } from "react"

interface Props {
  name: string,
  formRef: React.RefObject<HTMLFormElement>,
}

export default function NumberInputD({ name, formRef }: Props) {
  const [number, setNumber] = useState(0)

  return (

      <input
        min={0.01}
        type="number"
        name={name}
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
        className="w-max border-2 border-gray-200 rounded-md"
      />

  )
}
