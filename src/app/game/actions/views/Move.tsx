import styled from 'styled-components'
import { IDistrictModel } from 'app/game/store/DistrictModel'
import { ActionText } from './sharedStyles'

const MoveContainer = styled.div`
  display: flex;
`

type Props = WithChildren<{
  fromDistrict: IDistrictModel | undefined
  toDistrict: IDistrictModel | undefined
}>

function Move({ fromDistrict, toDistrict }: Props): JSX.Element {
  // const move = {
  //   default: <p>Choose source district</p>,
  //   source: <p>Move to district</p>,
  //   target: <PlaceTroops district={targetDistrict} />,
  // }

  return (
    <>
      <ActionText>Moves left: 7</ActionText>
      <MoveContainer>
        {fromDistrict && <></>}
        {toDistrict && <></>}
      </MoveContainer>
    </>
  )
}

export default Move
