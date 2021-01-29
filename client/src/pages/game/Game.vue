<template>
  <div class="scene">
    <header class="header">header</header>
    <div class="display">
      <aside class="chat">chat</aside>
      <main class="map">
        <GameMap
          :selectedDistrictId="selectedDistrictId"
          :selectDistrictById="selectDistrictById"
        />
      </main>
      <aside class="actions">
        <Actions :selectedDistrict="selectedDistrict" />
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import mapData from '@/assets/maps/testmap/data.json'
import GameMap from './Map/Map.vue'
import Actions from './Actions/Actions.vue'

export type DistrictId = keyof typeof mapData.districts | ''
export type DistrictData = {
  name: string
  isSelected: boolean
}
export type SelectedDistrict = null | DistrictData

const Game = defineComponent({
  components: {
    GameMap,
    Actions,
  },

  setup() {
    const districts = ref(new Map())
    Object.entries(mapData.districts).forEach(([id, data]) => {
      districts.value.set(id, { ...data, isSelected: false })
    })

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
    selectDistrictById(id: DistrictId) {
      this.selectedDistrictId = id
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
