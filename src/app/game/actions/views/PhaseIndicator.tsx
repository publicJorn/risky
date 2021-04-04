import styled from 'styled-components'

type Props = WithChildren<{
  phase: string
}>

const Phase = styled.p`
  margin-top: 0;
  text-align: center;
  font-weight: bold;
`

function PhaseIndicator({ phase }: Props): JSX.Element {
  return <Phase>{phase}</Phase>
}

export default PhaseIndicator
