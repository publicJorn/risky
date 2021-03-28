import { types, Instance } from 'mobx-state-tree'
import mapData from 'assets/maps/testmap/data.json'
import DistrictModel from './DistrictModel'

const GameStore = types
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

export interface IGameStore extends Instance<typeof GameStore> {}

type MapDataDistricts = {
  id: string
  name: string
  borders: string[]
}

const createGameStore = (): IGameStore => {
  const districts: { [k: string]: MapDataDistricts } = {}

  for (const [key, district] of Object.entries(mapData.districts)) {
    districts[key] = { id: key, ...district }
  }

  return GameStore.create({
    mapId: mapData.mapId,
    districts,
  })
}

export default createGameStore
