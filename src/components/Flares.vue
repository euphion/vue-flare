<template>
  <div
    :class="flaresClasses"
    :style="{ maxWidth: flareStore.settings.value.maxWidth }"
  >
    <slot v-if="$slots.default" />
    <Flare
      v-for="{ id, type, title, message, duration, hasIcon, hasLoading, closable } of myFlares"
      v-else
      :key="`flare-${id}`"
      :type="type"
      :title="title"
      :message="message"
      :duration="duration"
      :closable="closable"
      :has-icon="hasIcon"
      :has-loading="hasLoading"
      :animation="flareStore.settings.value.animation"
      :border-radius="flareStore.settings.value.borderRadius"
      :backdrop-filter-blur="flareStore.settings.value.backdropFilterBlur"
      @close="flareStore.hide(id)"
    />
  </div>
</template>

<script setup lang="ts">
import Flare from '~/components/Flare.vue'
import { computed, inject } from 'vue'
import { FlarePositionEnum } from '~/enums/FlarePositionEnum'
import { FlareStoreInterface } from '~/interfaces/FlareStoreInterface'

const flareStore = inject('flare') as FlareStoreInterface

const myFlares = computed(() => {
  return flareStore.flares.value
})

const flaresClasses = computed(() => [
  'flares',
  {
    'flares-top-left': flareStore.settings.value.position === FlarePositionEnum.TOP_LEFT,
    'flares-top-right': flareStore.settings.value.position === FlarePositionEnum.TOP_RIGHT,
    'flares-top-center': flareStore.settings.value.position === FlarePositionEnum.TOP_CENTER,
    'flares-bottom-left': flareStore.settings.value.position === FlarePositionEnum.BOTTOM_LEFT,
    'flares-bottom-right': flareStore.settings.value.position === FlarePositionEnum.BOTTOM_RIGHT,
    'flares-bottom-center': flareStore.settings.value.position === FlarePositionEnum.BOTTOM_CENTER,
  }
])
</script>

<style lang="scss">
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
