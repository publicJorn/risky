import { useRef, useState, useEffect, ChangeEvent } from 'react'
// import { useDebouncedCallback } from 'use-debounce'

import styled from 'styled-components'

const Field = styled.div`
  display: block;
`

const Label = styled.label`
  display: block;
`

type Props = WithChildren<{
  min: number
  max: number
  value: number
  onTroopsChange: (n: number) => void
}>

function PlaceTroops({ min, max, value, onTroopsChange }: Props): JSX.Element {
  const refTroops = useRef<HTMLInputElement>(null)

  useEffect(() => {
    refTroops.current?.focus()
  }, [onTroopsChange])

  const handleTroopChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const n = Number(evt.currentTarget.value)
    onTroopsChange(n)
  }

  return (
    <Field>
      <Label htmlFor="troops">Troops: {value}</Label>
      <input
        ref={refTroops}
        type="range"
        min={min}
        max={max}
        id="troops"
        name="troops"
        value={value}
        disabled={!max}
        onChange={handleTroopChange}
      />
    </Field>
  )
}

export default PlaceTroops
