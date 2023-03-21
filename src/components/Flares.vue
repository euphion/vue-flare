<template>
  <div
    :class="flaresClasses"
    :style="{ maxWidth: flareStore.settings.maxWidth }"
  >
    <slot v-if="$slots.default" />
    <Flare
      v-for="{ id, type, title, message, duration } of flareStore.flares"
      v-else
      :key="`flare-${id}`"
      :type="type"
      :title="title"
      :message="message"
      :duration="duration"
      :animation="flareStore.settings.animation"
      :border-radius="flareStore.settings.borderRadius"
      :backdrop-filter-blur="flareStore.settings.backdropFilterBlur"
      @close="flareStore.hide(id)"
    />
  </div>
</template>

<script setup lang="ts">
import Flare from '~/components/Flare.vue'
import { useFlareStore } from '~/stores/FlareStore'
import { computed } from 'vue'
import { FlarePositionEnum } from '~/enums/FlarePositionEnum'

const flareStore = useFlareStore()

const flaresClasses = computed(() => [
  'flares',
  {
    'flares-top-left': flareStore.settings.position === FlarePositionEnum.TOP_LEFT,
    'flares-top-right': flareStore.settings.position === FlarePositionEnum.TOP_RIGHT,
    'flares-top-center': flareStore.settings.position === FlarePositionEnum.TOP_CENTER,
    'flares-bottom-left': flareStore.settings.position === FlarePositionEnum.BOTTOM_LEFT,
    'flares-bottom-right': flareStore.settings.position === FlarePositionEnum.BOTTOM_RIGHT,
    'flares-bottom-center': flareStore.settings.position === FlarePositionEnum.BOTTOM_CENTER,
  }
])
</script>

<style scoped lang="scss">
.flares {
  position: fixed;
  width: 100%;
  max-width: 400px;
  z-index: 500;
  display: flex;
  gap: 10px;
  flex-direction: column;

  &-top-left {
    top: 30px;
    left: 10px;
  }

  &-top-right {
    top: 30px;
    right: 10px;
  }

  &-top-center {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }

  &-bottom-left {
    bottom: 30px;
    left: 10px;
  }

  &-bottom-right {
    bottom: 30px;
    right: 10px;
  }

  &-bottom-center {
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
