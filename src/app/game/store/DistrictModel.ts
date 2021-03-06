import { types, Instance } from 'mobx-state-tree'

export enum Selected {
  None,
  Primary,
  Secondary,
}

const DistrictModel = types
  .model('District', {
    id: types.identifier,
    name: types.string,
    borders: types.array(types.string),
    selected: Selected.None,
    owner: 0,
    troops: 0,
    troopsDelta: 0,
  })

  .actions((self) => ({
    setTroops(n: number) {
      self.troops = n
    },

    setTroopsDelta(n: number) {
      self.troopsDelta = n
    },
  }))

export default DistrictModel

export interface IDistrictModel extends Instance<typeof DistrictModel> {}
