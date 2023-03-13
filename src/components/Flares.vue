<template>
  <div :class="['flares']">
    <Flare
        v-for="{ id, type, title, message } of flareStore.flares"
        :key="`flare-${id}`"
        :type="type"
        :title="title"
        :message="message"
        border-radius
        animation="fade-left"
        @close="flareStore.hide(id)"
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
  top: 30px;
  width: 100%;
  right: 10px;
  max-width: 400px;
  z-index: 500;
  display: flex;
  gap: 10px;
  flex-direction: column;

  &--top-left {
    top: 30px;
    left: 10px;
  }

  &--top-right {
    top: 30px;
    right: 10px;
  }

  &--bottom-left {
    bottom: 30px;
    left: 10px;
  }

  &--bottom-right {
    bottom: 30px;
    right: 10px;
  }


}
</style>
