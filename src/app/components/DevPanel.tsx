import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import { useGameStore, Phase, useDistrictStore } from 'app/game/store'
import React from 'react'

const DevSelect = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${(p) => p.theme.spacing05};
`

const phases = Object.keys(Phase)
const disabledPhases = [Phase.Wait, Phase.Attack, Phase.Defend] as string[]

function DevPanel(): JSX.Element {
  const { selectPhase: devSelectPhase, phase } = useGameStore()
  const { districts } = useDistrictStore()

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>): void => {
    devSelectPhase(evt.target.value as Phase)
  }

  const setTroops = (): void => {
    const troopAllocations = [1, 5, 2, 1]
    let i = 0
    districts.forEach((district) => {
      district.setTroops(troopAllocations[i++])
    })
  }

  return (
    <DevSelect>
      <button onClick={setTroops}>Mock set troops</button>
      <br />
      <label htmlFor="devSelectPhase">Select phase:</label>
      <select id="devSelectPhase" onChange={handleChange} value={phase}>
        {phases.map((phase) => (
          <option key={phase} disabled={disabledPhases.includes(phase)}>
            {phase}
          </option>
        ))}
      </select>
    </DevSelect>
  )
}

export default observer(DevPanel)
