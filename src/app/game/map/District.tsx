import { DistrictPath } from './MapType'
import { Path } from './map.styles'

type Props = WithChildren<{ path: DistrictPath }>

function District({ path }: Props): JSX.Element {
  const { d, style } = path.attributes
  return (
    <Path
      d={d}
      svgStyle={style}
      // isSelected={isSelected(path.attributes.id)}
    />
  )
}

export default District
