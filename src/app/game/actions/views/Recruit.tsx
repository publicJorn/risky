import styled from 'styled-components'
import { IDistrictModel } from 'app/game/store/DistrictModel'
import PlaceTroops from './PlaceTroops'

const Pool = styled.p`
  font-weight: bold;
`

type Props = WithChildren<{
  district: IDistrictModel | undefined
}>

function Recruit({ district }: Props): JSX.Element | null {
  // const recruit = {
  //   default: <p>Select a district</p>,
  //   target: <PlaceTroops district={targetDistrict} />,
  // }

  return (
    <>
      <Pool>Recruitment pool: 3</Pool>
      {district && (
        <>
          <p>Add to {district.name}</p>
          <PlaceTroops district={district} />
        </>
      )}
    </>
  )
}

export default Recruit
