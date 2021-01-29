<template>
  <section class="district" v-if="selectedDistrict">
    <strong>{{ selectedDistrict.name }}</strong>
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
  },
})

export default Actions
</script>

<style scoped lang="scss">
.district {
  padding: $spacing05;
}
</style>
