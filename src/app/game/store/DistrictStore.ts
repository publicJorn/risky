import { types, Instance } from 'mobx-state-tree'
import DistrictModel from './DistrictModel'

const DistrictStore = types
  .model({
    mapId: types.string,
    districts: types.map(DistrictModel),
  })

  .views((self) => ({
    get selectedDistrict() {
      return [...self.districts.values()].find(
        (district) => district.isSelected,
      )
    },
  }))

  .actions((self) => ({
    selectDistrict(id: string) {
      const prev = self.selectedDistrict
      if (prev) prev.isSelected = false

      const next = self.districts.get(id)
      if (next) next.isSelected = true
    },
  }))

export interface IDistrictStore extends Instance<typeof DistrictStore> {}

export default DistrictStore
