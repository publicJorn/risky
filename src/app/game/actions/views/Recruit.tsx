import { useRef, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useGameStore } from 'app/game/store'
import { IDistrictModel } from 'app/game/store/DistrictModel'
import Button from 'app/components/Button'
import PlaceTroops from './PlaceTroops'
import { ActionText } from './sharedStyles'

type Props = {
  district: IDistrictModel | undefined
}

function Recruit({ district }: Props): JSX.Element | null {
  const { troopsDeltaPool, setTroopsDeltaPool } = useGameStore()
  const targetDistrict = useRef<IDistrictModel>()

  // TODO: move this to state machine when it's there?
  useEffect(() => {
    if (targetDistrict.current && targetDistrict.current !== district) {
      targetDistrict.current.setTroopsDelta(0)
    }
    targetDistrict.current = district
  }, [district])

  const handleTroopsChange = (n: number): void => {
    district!.setTroopsDelta(n)
  }

  const handleCommitTroops = (): void => {
    setTroopsDeltaPool(troopsDeltaPool - district!.troopsDelta)
    district!.setTroops(district!.troops + district!.troopsDelta)
    district!.setTroopsDelta(0)
  }

  return (
    <>
      <ActionText>
        Recruitment pool: {troopsDeltaPool - (district?.troopsDelta ?? 0)}
      </ActionText>

      {district && (
        <>
          <p>Add to {district.name}</p>
          <PlaceTroops
            min={0}
            max={troopsDeltaPool}
            value={district.troopsDelta}
            onTroopsChange={handleTroopsChange}
          />
          <Button onClick={handleCommitTroops} disabled={!troopsDeltaPool}>
            Commit
          </Button>
        </>
      )}
    </>
  )
}

export default observer(Recruit)
