type Props = WithChildren<{ n?: number }>

export const troopsDeltaString = (n: number): string =>
  n > 0 ? `+${n}` : `${n}`

function TroopsDelta({ n = 0 }: Props): JSX.Element | null {
  return n !== 0 ? <span>({troopsDeltaString(n)})</span> : null
}

export default TroopsDelta
