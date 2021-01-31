<template>
  <div @click="handleClick" ref="svgWrapper">
    <svg v-bind="gameMap.attributes">
      <path
        v-for="path in gameMap.children"
        :key="path.attributes.id"
        v-bind="path.attributes"
        :class="{
          selected: isSelected(path.attributes.id),
        }"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import gameMap from '@/assets/maps/testmap/map.json'
import { SelectedDistrict } from '../Game.vue'

const Map = defineComponent({
  props: {
    selectedDistrict: {
      type: Object as PropType<SelectedDistrict>,
    },
    selectDistrictById: {
      type: Function as PropType<(id: string) => void>,
      required: true,
    },
  },

  data() {
    return { gameMap }
  },

  methods: {
    handleClick(evt: MouseEvent) {
      const el = evt.target as SVGElement
      const id = el.getAttribute('id')

      if (!id) return

      if (this.selectedDistrict && this.selectedDistrict.id === id) {
        this.selectDistrictById('')
      } else {
        this.selectDistrictById(id)
      }
    },

    isSelected(id: string): boolean {
      return this.selectedDistrict?.id === id
    },
  },
})

export default Map
</script>

<style scoped lang="scss">
svg {
  width: 100%;
  height: 100%;
  pointer-events: all;
}

path.selected {
  fill: lime;
  stroke: green;
}
</style>
