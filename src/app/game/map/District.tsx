import { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useDistrictStore, useGameStore } from 'app/game/store'
import { DistrictPath } from './MapType'
import { Path } from './map.styles'
import SoldierNumber from './SoldierNumber'
import { IDistrictModel } from '../store/DistrictModel'

type Props = React.PropsWithChildren<{
  path: DistrictPath
  district: IDistrictModel
}>

function District({ path, district }: Props): JSX.Element {
  const refPath = useRef<SVGPathElement>(null)
  const [dimensions, setDimensions] = useState<SVGRect | undefined>(undefined)

  const gameStore = useGameStore()
  const { selectDistrict } = useDistrictStore()
  const { d, style } = path.attributes

  const handleClick = (): void => {
    selectDistrict(district.id, district.selected)
  }

  useEffect(() => {
    setDimensions(refPath.current?.getBBox())
  }, [])

  return (
    <>
      <Path
        ref={refPath}
        d={d}
        svgStyle={style}
        onClick={handleClick}
        selected={district.selected}
        phase={gameStore.phase}
      />
      {dimensions && (
        <SoldierNumber nr={district.troops} districtDimensions={dimensions} />
      )}
    </>
  )
}

export default observer(District)
