import { useRef, ReactSVGElement } from 'react'

import mapSvg from 'assets/maps/testmap/map.json'

// type Props = {
//   path: object
// }

function Map(): ReactSVGElement {
  const ref = useRef()
  return (
    <svg {...mapSvg.attributes} ref={ref}>
      {mapSvg.children.map((path) => (
        <path
          key={path.attributes.id}
          // isSelected={isSelected(path.attributes.id)}
        />
      ))}
    </svg>
  )
}

export default Map
