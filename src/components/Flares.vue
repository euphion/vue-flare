<template>
  <div :class="['flares']">
    <Flare
        v-for="flare in flareStore.flares"
        :key="flare.id"
        :flare="flare"
        @close="flareStore.hide(flare.id)"
    />
  </div>
</template>

<script setup lang="ts">
import Flare from "./Flare.vue"
import { useFlareStore } from "../stores/FlareStore"

const flareStore = useFlareStore()
</script>

<style scoped lang="scss">
.flares {
  position: fixed;
  top: 50px;
  width: 100%;
  right: 10px;
  max-width: 400px;
  z-index: 100;
  display: flex;
  gap: 10px;
  flex-direction: column;

  &--top {
    top: 0;
    z-index: 200;
  }
}
</style>
