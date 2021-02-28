import mapSvg from 'assets/maps/testmap/map.json'
import DistrictPaths from './Districts'
import { Svg } from './map.styles'

function Map(): JSX.Element {
  const { style, ...attrs } = mapSvg.attributes
  return (
    <Svg {...attrs} svgStyle={style}>
      <DistrictPaths paths={mapSvg.children} />
    </Svg>
  )
}

export default Map
