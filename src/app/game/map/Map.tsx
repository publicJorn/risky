import mapSvg from 'assets/maps/testmap/map.json'
import SoldierDef from './SoldierDef'
import Districts from './Districts'
import { MapSvg } from './map.styles'

function Map(): JSX.Element {
  const { style, ...attrs } = mapSvg.attributes
  return (
    <>
      <SoldierDef />
      <MapSvg {...attrs} svgStyle={style}>
        <Districts paths={mapSvg.children} />
      </MapSvg>
    </>
  )
}

export default Map
