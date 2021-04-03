import { useDistrictStore } from 'app/game/store'
import { DistrictPath } from './MapType'
import District from './District'

type Props = WithChildren<{ paths: DistrictPath[] }>

function DistrictPaths({ paths }: Props): JSX.Element {
  const { districts } = useDistrictStore()

  return (
    <>
      {paths.map((path) => {
        const id = path.attributes.id
        const district = districts.get(id)

        return district === undefined ? null : (
          <District key={id} path={path} district={district} />
        )
      })}
    </>
  )
}

export default DistrictPaths
