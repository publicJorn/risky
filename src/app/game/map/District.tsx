import { useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useDistrictStore } from 'app/game/store'
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

  const { selectDistrict } = useDistrictStore()
  const { d, style } = path.attributes

  const handleClick = (): void => {
    selectDistrict(district.isSelected ? '' : district.id)
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
        isSelected={district.isSelected}
      />
      {dimensions && (
        <SoldierNumber nr={district.troops} districtDimensions={dimensions} />
      )}
    </>
  )
}

export default observer(District)
