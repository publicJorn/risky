import mapSvg from 'assets/maps/testmap/map.json'

const dashToCamel = (str: string): string =>
  str.replace(/-(.)/g, (m, s) => s.toUpperCase())

const allDashToCamel = (strings: string[]): string[] => strings.map(dashToCamel)

// type Props = {
//   path: object
// }

function Map(): JSX.Element {
  return (
    <svg {...allDashToCamel(mapSvg.attributes)}>
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
