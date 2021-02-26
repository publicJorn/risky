<template>
  <g>
    <path
      :key="path.attributes.id"
      v-bind="path.attributes"
      :class="{
        selected: isSelected(path.attributes.id),
      }"
    />
  </g>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const name = defineComponent({})

export default name
</script>

<style scoped lang="scss"></style>
