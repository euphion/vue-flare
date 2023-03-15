<template>
  <div :class="flaresClasses">
    <slot v-if="$slots.default" />
    <Flare
      v-for="{ id, type, title, message, duration } of flareStore.flares"
      v-else
      :key="`flare-${id}`"
      :type="type"
      :title="title"
      :message="message"
      :duration="duration"
      :animation="animation"
      :border-radius="borderRadius"
      :backdrop-filter-blur="backdropFilterBlur"
      @close="flareStore.hide(id)"
    />
  </div>
</template>

<script setup lang="ts">
import Flare from '~/components/Flare.vue'
import { useFlareStore } from '~/stores/FlareStore'
import { FlareAnimationEnum } from '~/enums/FlareAnimationEnum'
import { computed, PropType } from 'vue'
import { FlarePositionEnum } from '~/enums/FlarePositionEnum'

const props = defineProps({
  position: {
    type: String as PropType<FlarePositionEnum>,
    default: FlarePositionEnum.TOP_RIGHT,
    validator(value: FlarePositionEnum) {
      return [
        FlarePositionEnum.TOP_LEFT,
        FlarePositionEnum.TOP_RIGHT,
        FlarePositionEnum.BOTTOM_LEFT,
        FlarePositionEnum.BOTTOM_RIGHT
      ].includes(value)
    }
  },
  animation: {
    type: String as PropType<FlareAnimationEnum>,
    default: FlareAnimationEnum.FADE_IN,
    validator(value: FlareAnimationEnum) {
      return [
        FlareAnimationEnum.FADE_IN,
        FlareAnimationEnum.FADE_TOP,
        FlareAnimationEnum.FADE_RIGHT,
        FlareAnimationEnum.FADE_BOTTOM,
        FlareAnimationEnum.FADE_LEFT
      ].includes(value)
    }
  },
  borderRadius: {
    type: Boolean,
    default: false
  },
  backdropFilterBlur: {
    type: Boolean,
    default: false
  },
})

const flareStore = useFlareStore()

const flaresClasses = computed(() => [
  'flares',
  {
    'flares--top-left': props.position === FlarePositionEnum.TOP_LEFT,
    'flares--top-right': props.position === FlarePositionEnum.TOP_RIGHT,
    'flares--bottom-left': props.position === FlarePositionEnum.BOTTOM_LEFT,
    'flares--bottom-right': props.position === FlarePositionEnum.BOTTOM_RIGHT,
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
