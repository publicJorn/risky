import { types, Instance, castToSnapshot } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import mapData from 'assets/maps/testmap/data.json'
import DistrictStore, { IDistrictStore } from './DistrictStore'

export enum Phase {
  Wait = 'Wait',
  Recruit = 'Recruit',
  Attack = 'Attack',
  Move = 'Move',
  Defend = 'Defend',
}

// enum Actions {
//   Default,
//   UseReserves,
// }

const GameStore = types
  .model({
    districtStore: DistrictStore,
    phase: types.optional(
      types.enumeration<Phase>(Object.values(Phase)),
      Phase.Recruit,
    ),
    troopsDeltaPool: 3,
  })

  .views((self) => ({}))

  .actions((self) => ({
    setTroopsDeltaPool(n: number) {
      self.troopsDeltaPool = n
    },

    selectPhase(phase: Phase) {
      self.phase = phase
    },
  }))

export interface IGameStore extends Instance<typeof GameStore> {}

// ---

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

  const districtStore = DistrictStore.create({
    mapId: mapData.mapId,
    districts,
  })

  return GameStore.create({
    districtStore: castToSnapshot(districtStore),
  })
}

export const GameContext = createContext(createGameStore())

export const useGameStore = (): IGameStore => useContext(GameContext)

export const useDistrictStore = (): IDistrictStore => {
  const { districtStore } = useGameStore()
  return districtStore
}
