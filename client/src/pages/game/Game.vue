<template>
  <div class="scene">
    <header class="header">header</header>
    <div class="display">
      <aside class="chat">chat</aside>
      <main class="map">
        <GameMap
          :selectedDistrict="selectedDistrict"
          :selectDistrictById="selectDistrictById"
        />
      </main>
      <aside class="actions">
        <Actions :selectedDistrict="selectedDistrict" :setTroops="setTroops" />
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import mapData from '@/assets/maps/testmap/data.json'
import GameMap from './Map/Map.vue'
import Actions from './Actions/Actions.vue'

export type MapDistrictData = {
  name: string
  borders: string[]
}
export type DistrictData = MapDistrictData & {
  id: string
  isSelected: boolean
  troops: number
}
export type SelectedDistrict = null | DistrictData

const Game = defineComponent({
  components: {
    GameMap,
    Actions,
  },

  setup() {
    const districtLoader: [string, DistrictData][] = Object.entries(
      mapData.districts,
    ).map(([id, data]) => [
      id,
      {
        ...data,
        id,
        isSelected: false,
        troops: 0,
      },
    ])
    const districts = ref(new Map<string, DistrictData>(districtLoader))

    const selectedDistrictId = ref('')

    const selectedDistrict = computed(() =>
      districts.value.get(selectedDistrictId.value),
    )

    return {
      districts,
      selectedDistrictId,
      selectedDistrict,
    }
  },

  methods: {
    selectDistrictById(id: string) {
      this.selectedDistrictId = id
    },

    setTroops(nr: number) {
      const district = this.districts.get(this.selectedDistrictId)
      if (district) district.troops = Math.max(nr, 0)
    },
  },
})

export default Game
</script>

<style scoped lang="scss">
.scene {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-color: mediumpurple;
}

.display {
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
}

.chat {
  width: 15rem;
  background-color: lime;
}

.map {
  flex: 1 1 auto;
  background-color: cyan;
}

.actions {
  width: 15rem;
  background-color: hotpink;
}
</style>
