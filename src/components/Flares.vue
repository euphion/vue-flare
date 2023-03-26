<template>
  <div
    :class="flaresClasses"
    :style="{ maxWidth: flare.settings.value.maxWidth }"
  >
    <slot v-if="$slots.default" />
    <Flare
      v-for="{ id, type, title, message, duration, hasIcon, hasLoading, closable } of flare.flares.value"
      v-else
      :key="`flare-${id}`"
      :type="type"
      :title="title"
      :message="message"
      :duration="duration"
      :closable="closable"
      :has-icon="hasIcon"
      :has-loading="hasLoading"
      :animation="flare.settings.value.animation"
      :border-radius="flare.settings.value.borderRadius"
      :backdrop-filter-blur="flare.settings.value.backdropFilterBlur"
      @close="flare.hide(id)"
    />
  </div>
</template>

<script setup lang="ts">
import Flare from '~/components/Flare.vue'
import { computed, inject } from 'vue'
import { FlarePositionEnum } from '~/enums/FlarePositionEnum'
import { FlareInterface } from '~/interfaces/FlareInterface'

const flare = inject('flare') as FlareInterface

const flaresClasses = computed(() => [
  'flares',
  {
    'flares-top-left': flare.settings.value.position === FlarePositionEnum.TOP_LEFT,
    'flares-top-right': flare.settings.value.position === FlarePositionEnum.TOP_RIGHT,
    'flares-top-center': flare.settings.value.position === FlarePositionEnum.TOP_CENTER,
    'flares-bottom-left': flare.settings.value.position === FlarePositionEnum.BOTTOM_LEFT,
    'flares-bottom-right': flare.settings.value.position === FlarePositionEnum.BOTTOM_RIGHT,
    'flares-bottom-center': flare.settings.value.position === FlarePositionEnum.BOTTOM_CENTER,
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
