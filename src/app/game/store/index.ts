import { types, Instance, castToSnapshot } from 'mobx-state-tree'
import { autorun } from 'mobx'
import makeInspectable from 'mobx-devtools-mst'
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
  .model('GameStore', {
    districtStore: DistrictStore,
    phase: types.optional(
      types.enumeration<Phase>(Object.values(Phase)),
      Phase.Wait,
    ),
    troopsDeltaPool: 0,
  })

  .views((self) => ({}))

  .actions((self) => ({
    initializeWait() {
      console.log('init phase wait')
    },

    initializeRecruit() {
      console.log('init phase recruit')
      self.troopsDeltaPool = 3
      self.phase = Phase.Recruit
    },

    initializeAttack() {
      console.log('init phase attack')
    },

    initializeMove() {
      console.log('init phase move')
      self.troopsDeltaPool = 7
      self.phase = Phase.Move
    },

    initializeDefend() {
      console.log('init phase defend')
    },

    setTroopsDeltaPool(n: number) {
      self.troopsDeltaPool = n
    },
  }))

  .actions((self) => ({
    endPhase() {
      switch (self.phase) {
        case Phase.Recruit:
          self.initializeMove()
          break

        case Phase.Move:
          self.initializeRecruit()
          break
      }
    },

    selectPhase(phase: Phase) {
      switch (phase) {
        case Phase.Recruit:
          self.initializeRecruit()
          break

        case Phase.Move:
          self.initializeMove()
          break
      }
    },
  }))

  .actions((self) => ({
    afterCreate() {
      self.initializeRecruit()
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

  const store = GameStore.create({
    districtStore: castToSnapshot(districtStore),
  })

  makeInspectable(store)
  return store
}

export const GameContext = createContext(createGameStore())

export const useGameStore = (): IGameStore => useContext(GameContext)

export const useDistrictStore = (): IDistrictStore => {
  const { districtStore } = useGameStore()
  return districtStore
}
