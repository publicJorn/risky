<template>
  <section class="district" v-if="selectedDistrict">
    <strong>{{ selectedDistrict.name }}</strong>
    <br />
    <label>
      Troops:
      <input
        type="number"
        :value="selectedDistrict.troops"
        @change="handleChangeTroops"
      />
    </label>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SelectedDistrict } from '../Game.vue'

const Actions = defineComponent({
  props: {
    selectedDistrict: {
      type: Object as PropType<SelectedDistrict>,
    },
    setTroops: {
      type: Function as PropType<(nr: number) => void>,
      required: true,
    },
  },

  methods: {
    handleChangeTroops(evt: InputEvent) {
      if (evt.target) {
        const tgt = evt.target as HTMLInputElement
        this.setTroops(Number(tgt.value))
      }
    },
  },
})

export default Actions
</script>

<style scoped lang="scss">
.district {
  padding: $spacing05;
}
</style>
