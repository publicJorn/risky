import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useGameStore, Phase } from 'app/game/store'

const DevSelect = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const phases = Object.keys(Phase)
const disabledPhases = [Phase.Wait, Phase.Attack, Phase.Defend] as string[]

function DevSelectPhase(): JSX.Element {
  const { devSelectPhase, localPhase } = useGameStore()

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
    devSelectPhase(evt.target.value as Phase)
  }

  return (
    <DevSelect>
      <label htmlFor="devSelectPhase">Select phase:</label>
      <br />
      <select id="devSelectPhase" onChange={handleChange} value={localPhase}>
        {phases.map((phase) => (
          <option key={phase} disabled={disabledPhases.includes(phase)}>
            {phase}
          </option>
        ))}
      </select>
    </DevSelect>
  )
}

export default observer(DevSelectPhase)
