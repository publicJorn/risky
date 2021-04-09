import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useGameStore, useDistrictStore, Phase } from 'app/game/store'
import Button from 'app/components/Button'
import PhaseIndicator from './views/PhaseIndicator'
import DistrictInfo from './views/DistrictInfo'
import Recruit from './views/Recruit'
import Move from './views/Move'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${(p) => p.theme.spacing05};
`

export const FlexEnd = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

function Actions(): JSX.Element {
  const { phase, endPhase } = useGameStore()
  const { primaryDistrict, secondaryDistrict } = useDistrictStore()

  const renderAction = {
    [Phase.Wait]: <p>Wait phase</p>,
    [Phase.Recruit]: <Recruit district={primaryDistrict} />,
    [Phase.Attack]: <p>Attack phase</p>,
    [Phase.Move]: (
      <Move fromDistrict={primaryDistrict} toDistrict={secondaryDistrict} />
    ),
    [Phase.Defend]: <p>Defend phase</p>,
  }

  // TODO: district.owner === 'me' && turn === 'me'
  return (
    <Wrapper>
      <div>
        <PhaseIndicator phase={phase} />
        <DistrictInfo {...primaryDistrict} />
        {renderAction[phase]}
      </div>

      <FlexEnd>
        <Button onClick={endPhase}>End phase</Button>
      </FlexEnd>
    </Wrapper>
  )
}

export default observer(Actions)
