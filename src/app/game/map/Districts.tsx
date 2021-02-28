import { DistrictPath } from './MapType'
import District from './District'

type Props = WithChildren<{ paths: DistrictPath[] }>

function DistrictPaths({ paths }: Props): JSX.Element {
  return (
    <>
      {paths.map((path) => (
        <District key={path.attributes.id} path={path} />
      ))}
    </>
  )
}

export default DistrictPaths
