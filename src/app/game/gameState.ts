import create from 'zustand'
import mapData from 'assets/maps/testmap/data.json'

export type MapDistrictData = {
  name: string
  borders: string[]
}

export type DistrictData = MapDistrictData & {
  id: string
  isSelected: boolean
  troops: number
}

type GameState = {
  districts: Map<string, DistrictData>
  initDistricts: () => void
}

const useGameState = create<GameState>((set) => ({
  districts: new Map(),

  initDistricts: () =>
    set((state) => {
      if (state.districts.size > 0) {
        console.error('Districts already initialised')
        return { districts: state.districts }
      }

      return {
        districts: new Map(
          Object.entries(mapData.districts).map(([id, data]) => [
            id,
            {
              ...data,
              id,
              isSelected: false,
              troops: 0,
            },
          ]),
        ),
      }
    }),
}))

export default useGameState
