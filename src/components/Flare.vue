<template>
  <div
      :class="['flare', {
      'flare--success': flare.type === FlareTypeEnum.SUCCESS,
      'flare--info': flare.type === FlareTypeEnum.INFO,
      'flare--warning': flare.type === FlareTypeEnum.WARNING,
      'flare--error': flare.type === FlareTypeEnum.ERROR
    }]"
  >
    <div class="flare__message">
      {{ flare.message }}
    </div>
    <button @click="emit('close')">
      close
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"
import { FlareInterface } from "../interfaces/FlareInterface";
import { FlareTypeEnum } from "../enums/FlareTypeEnum"

const emit = defineEmits(["close"])

defineProps({
  flare: {
    type: Object as PropType<FlareInterface>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.flare {
  align-items: center;
  color: #ffffff;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 600px;
  min-height: 50px;
  padding: 0 20px;
  width: 100%;

  > :deep(.btn) {
    flex-shrink: 0;
    padding: 10px;

    svg {
      height: 14px;
      width: 14px;
    }
  }

  &__message {
    padding: 10px;
  }

  &--success {
    background-color: green;
  }

  &--info {
    background-color: blue;
  }

  &--warning {
    background-color: orange;
  }

  &--error {
    background-color: red;
  }
}
</style>
