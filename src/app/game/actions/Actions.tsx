import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useGameStore, useDistrictStore, Phase } from 'app/game/store'
import PhaseIndicator from './views/PhaseIndicator'
import DistrictInfo from './views/DistrictInfo'
import Recruit from './views/Recruit'
import Move from './views/Move'
import DevSelectPhase from './DevSelectPhase'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${(p) => p.theme.spacing05};
`

function Actions(): JSX.Element {
  const { localPhase } = useGameStore()
  const { primaryDistrict, secondaryDistrict } = useDistrictStore()

  const renderAction = {
    [Phase.Wait]: <p>Wait phase</p>,
    [Phase.Recruit]: <Recruit district={primaryDistrict} />,
    [Phase.Attack]: <p>Attack phase</p>,
    [Phase.Move]: <Move />,
    [Phase.Defend]: <p>Defend phase</p>,
  }

  // TODO: district.owner === 'me'
  return (
    <Wrapper>
      <div>
        <PhaseIndicator phase={localPhase} />
        <DistrictInfo {...primaryDistrict} />
        {renderAction[localPhase]}
      </div>
      <DevSelectPhase />
    </Wrapper>
  )
}

export default observer(Actions)
