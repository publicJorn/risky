import { observer } from 'mobx-react-lite'
import { useStore, Phase } from 'app/game/store'
import { DevSelect } from './actions.styles'

const phases = Object.keys(Phase)

function DevSelectPhase(): JSX.Element {
  const { devSelectPhase, localPhase } = useStore()

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
    devSelectPhase(evt.target.value as Phase)
  }

  return (
    <DevSelect>
      <label htmlFor="devSelectPhase">Select phase:</label>
      <br />
      <select id="devSelectPhase" onChange={handleChange} value={localPhase}>
        {phases.map((phase) => (
          <option key={phase}>{phase}</option>
        ))}
      </select>
    </DevSelect>
  )
}

export default observer(DevSelectPhase)
