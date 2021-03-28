import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { GameContext } from '../Game'
import PlaceTroops from './views/PlaceTroops'

const Wrapper = styled.div`
  padding: ${(p) => p.theme.spacing05};
`

function Actions(): JSX.Element {
  const { selectedDistrict } = useContext(GameContext)

  if (!selectedDistrict)
    return (
      <Wrapper>
        <p>Select district</p>
      </Wrapper>
    )

  // TODO: turn === 'me' && stage === 'place troops' && district.owner === 'me'
  return (
    <Wrapper>
      <PlaceTroops district={selectedDistrict} />
    </Wrapper>
  )
}

export default observer(Actions)
