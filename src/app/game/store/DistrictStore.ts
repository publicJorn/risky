import { types, Instance, getParent } from 'mobx-state-tree'
import { autorun } from 'mobx'
import { Phase, IGameStore } from './index'
import DistrictModel, { Selected } from './DistrictModel'

const DistrictStore = types
  .model('DistrictStore', {
    mapId: types.string,
    districts: types.map(DistrictModel),
  })

  .views((self) => ({
    get parent(): IGameStore {
      return getParent(self)
    },

    get primaryDistrict() {
      return [...self.districts.values()].find(
        (district) => district.selected === Selected.Primary,
      )
    },

    get secondaryDistrict() {
      return [...self.districts.values()].find(
        (district) => district.selected === Selected.Secondary,
      )
    },
  }))

  .actions((self) => ({
    unselectAll() {
      if (self.primaryDistrict) self.primaryDistrict.selected = Selected.None
      if (self.secondaryDistrict)
        self.secondaryDistrict.selected = Selected.None
    },

    selectPrimary(id: string) {
      const prev = self.primaryDistrict
      if (prev) prev.selected = Selected.None

      if (prev?.id === id) return

      const next = self.districts.get(id)
      if (next) next.selected = Selected.Primary
    },

    selectSecondary(id: string) {
      const prev = self.secondaryDistrict
      if (prev) prev.selected = Selected.None

      const next = self.districts.get(id)
      if (next) next.selected = Selected.Secondary
    },
  }))

  .actions((self) => ({
    afterAttach() {
      autorun(() => self.parent.phase && self.unselectAll())
    },

    selectDistrict(id: string, selectedAs: number) {
      if (selectedAs && self.secondaryDistrict) {
        self.unselectAll()
        return
      }

      const isCorrectPhase = [Phase.Attack, Phase.Move].includes(
        self.parent.phase,
      )

      if (
        isCorrectPhase &&
        self.primaryDistrict &&
        self.primaryDistrict.id !== id
      ) {
        self.selectSecondary(id)
        return
      }

      self.selectPrimary(id)
    },
  }))

export interface IDistrictStore extends Instance<typeof DistrictStore> {}

export default DistrictStore
