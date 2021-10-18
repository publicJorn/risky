import { useRef, useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import { useGameStore } from 'app/game/store'
import { IDistrictModel } from 'app/game/store/DistrictModel'
import Button from 'app/components/Button'
import PlaceTroops from './PlaceTroops'
import { ActionText } from './sharedStyles'

const MoveContainer = styled.div`
  display: flex;
  flex-direction: column;
`

type Props = WithChildren<{
  fromDistrict: IDistrictModel | undefined
  toDistrict: IDistrictModel | undefined
}>

function Move({ fromDistrict, toDistrict }: Props): JSX.Element {
  const [maxTroops, setMaxTroops] = useState(0)
  const selFromDistrict = useRef<IDistrictModel>()
  const selToDistrict = useRef<IDistrictModel>()

  const { troopsDeltaPool, setTroopsDeltaPool } = useGameStore()

  useEffect(() => {
    if (selFromDistrict.current && selFromDistrict.current !== fromDistrict) {
      selFromDistrict.current.setTroopsDelta(0)
    }
    if (selToDistrict.current && selToDistrict.current !== toDistrict) {
      selToDistrict.current.setTroopsDelta(0)
    }

    selFromDistrict.current = fromDistrict
    selToDistrict.current = toDistrict

    setMaxTroops(Math.min((fromDistrict?.troops ?? 0) - 1, troopsDeltaPool))
  }, [fromDistrict, toDistrict])

  const handleTroopsChange = (n: number): void => {
    if (!fromDistrict || !toDistrict) return

    fromDistrict.setTroopsDelta(n * -1)
    toDistrict.setTroopsDelta(n)
  }

  const handleCommitTroops = (): void => {
    if (!fromDistrict || !toDistrict) return

    setTroopsDeltaPool(troopsDeltaPool - toDistrict.troopsDelta)
    fromDistrict.setTroops(fromDistrict.troops - toDistrict.troopsDelta)
    toDistrict.setTroops(toDistrict.troops + toDistrict.troopsDelta)
    fromDistrict.setTroopsDelta(0)
    toDistrict.setTroopsDelta(0)
  }

  return (
    <>
      <ActionText>
        Moves left: {troopsDeltaPool - (toDistrict?.troopsDelta ?? 0)}
      </ActionText>

      <MoveContainer>
        {fromDistrict && (
          <p>
            From: {fromDistrict.name}
            <br />
            To: {toDistrict ? toDistrict.name : ''}
          </p>
        )}

        {fromDistrict && toDistrict && (
          <>
            <PlaceTroops
              min={0}
              max={maxTroops}
              value={toDistrict.troopsDelta}
              onTroopsChange={handleTroopsChange}
            />
            <Button onClick={handleCommitTroops} disabled={!troopsDeltaPool}>
              Commit
            </Button>
          </>
        )}
      </MoveContainer>
    </>
  )
}

export default observer(Move)
