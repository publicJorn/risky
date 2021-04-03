import { observer } from 'mobx-react-lite'
import { useDistrictStore } from 'app/game/store'
import PlaceTroops from './views/PlaceTroops'
import DevSelectPhase from './DevSelectPhase'
import { Wrapper } from './actions.styles'

function Actions(): JSX.Element {
  const { selectedDistrict } = useDistrictStore()

  if (!selectedDistrict) {
    return (
      <Wrapper>
        <p>Select a district</p>
        <DevSelectPhase />
      </Wrapper>
    )
  }

  // TODO: turn === 'me' && stage === 'place troops' && district.owner === 'me'
  return (
    <Wrapper>
      <PlaceTroops district={selectedDistrict} />
      <DevSelectPhase />
    </Wrapper>
  )
}

export default observer(Actions)
