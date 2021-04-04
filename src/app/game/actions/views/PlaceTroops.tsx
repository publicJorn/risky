import { ChangeEvent } from 'react'
import { observer } from 'mobx-react-lite'
import { IDistrictModel } from 'app/game/store/DistrictModel'

import styled from 'styled-components'

const Label = styled.label`
  display: block;
`

type Props = WithChildren<{
  district: IDistrictModel
}>

// TODO: When "use reserves" all at once
function PlaceTroops({ district }: Props): JSX.Element {
  const handleTroopChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    district.setTroops(Number(evt.currentTarget.value))
  }

  return (
    <>
      <Label htmlFor="troopsinput">Troops</Label>
      <input
        type="number"
        id="troopsinput"
        name="troops"
        value={district.troops}
        onChange={handleTroopChange}
      />
    </>
  )
}

export default observer(PlaceTroops)
