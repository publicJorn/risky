<template>
  <div @click="handleClick" ref="svgWrapper">
    <svg
      viewBox="0 0 600 450"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="1.5"
    >
      <path
        id="bottomleft"
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M0 200h350v250H0z"
      />
      <path
        id="bottomright"
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M350 200h250v250H350z"
      />
      <path
        id="topright"
        d="M175 200h425V0H175v200"
        fill="none"
        stroke="#000"
        stroke-width="2"
      />
      <path
        id="topleft"
        d="M0 200h175V0H0v200"
        fill="none"
        stroke="#000"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { DistrictId } from '../Game.vue'

const selectedClass = 'selected-district'

const Map = defineComponent({
  props: {
    selectedDistrictId: {
      type: String as PropType<DistrictId>,
    },
    selectDistrictById: {
      type: Function as PropType<(id: string) => void>,
      required: true,
    },
  },

  created() {
    this.$watch(
      'selectedDistrictId',
      (newId: DistrictId, oldId: DistrictId) => {
        if (newId) {
          const selectEl = document.querySelector(`#${newId}`) as HTMLElement
          selectEl.classList.add(selectedClass)
        }

        if (oldId) {
          const unselectEl = document.querySelector(`#${oldId}`) as HTMLElement
          unselectEl.classList.remove(selectedClass)
        }
      },
    )
  },

  methods: {
    handleClick(evt: MouseEvent) {
      const el = evt.target as SVGElement
      const id = el.getAttribute('id')

      if (!id) return

      this.selectDistrictById(this.selectedDistrictId === id ? '' : id)
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

.selected-district {
  fill: lime;
  stroke: green;
}
</style>
