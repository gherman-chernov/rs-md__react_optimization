import { useId } from "react"

export function ObjectAttribute({name, value}: {name: string, value: string | number}) {
  const id = useId()

  return <div key={id} className="attr">
    <label>{name}: </label>
    <span>{value}</span>
  </div>
}