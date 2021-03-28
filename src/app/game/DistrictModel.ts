import { types, Instance } from 'mobx-state-tree'

const DistrictModel = types
  .model('District', {
    id: types.identifier,
    name: types.string,
    borders: types.array(types.string),
    isSelected: false,
    owner: 0,
    troops: 0,
  })

  .actions((self) => ({
    setTroops(nr: number) {
      self.troops = nr
    },
  }))

export interface IDistrictModel extends Instance<typeof DistrictModel> {}

export default DistrictModel
