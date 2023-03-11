<template>
  <div
      :class="['flare', {
      'flare--success': flare.type === FlareTypeEnum.SUCCESS,
      'flare--info': flare.type === FlareTypeEnum.INFO,
      'flare--warning': flare.type === FlareTypeEnum.WARNING,
      'flare--error': flare.type === FlareTypeEnum.ERROR
    }]"
  >
    <svg class="flare__icon">
      <use :xlink:href="`/icons.svg#${iconIdentifier}`" />
    </svg>
    <div class="flare__title">
      {{ flare.title }}
    </div>
    <div v-if="flare.message" class="flare__message">
      {{ flare.message }}
    </div>
    <button class="flare__close" @click="emit('close')">
      <svg>
        <use :xlink:href="`/icons.svg#close`" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import {computed, PropType} from "vue"
import { FlareInterface } from "../interfaces/FlareInterface";
import { FlareTypeEnum } from "../enums/FlareTypeEnum"

const emit = defineEmits(["close"])

const props = defineProps({
  flare: {
    type: Object as PropType<FlareInterface>,
    required: true
  }
})

const iconMap = {
  [FlareTypeEnum.SUCCESS]: "check",
  [FlareTypeEnum.INFO]: "info",
  [FlareTypeEnum.WARNING]: "error",
  [FlareTypeEnum.ERROR]: "error",
};

const iconIdentifier = computed<string>(() => {
  return iconMap[props.flare.type] || "info";
});
</script>

<style scoped lang="scss">
.flare {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 20px 35px 20px 80px;
  backdrop-filter: blur(10px);
  position: relative;
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  &__icon {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
  }

  &__message {
    font-size: 16px;
    margin-top: 5px;
  }

  &__close {
    all: unset;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
    opacity: .7;

    &:hover {
      opacity: 1;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }

  &--success {
    // light - #1fa55a
    // dark - #0e5f38
    background-color: rgba(31, 166, 90, 0.8);

    .flare__icon, .flare__close {
      color: #0e5f38;
    }
  }

  &--info {
    // light - #1f6fe0
    // dark - #10488a
    background-color: rgba(31, 112, 224, 0.8);

    .flare__icon, .flare__close {
      color: #10488a;
    }
  }

  &--warning {
    // light - #ee8d31
    // dark - #c34916
    background-color: rgba(237, 140, 50, 0.8);

    .flare__icon, .flare__close {
      color: #c34916;
    }
  }

  &--error {
    // light - #dc3055
    // dark - #851d41
    background-color: rgba(219, 48, 85, 0.8);

    .flare__icon, .flare__close {
      color: #851d41;
    }
  }
}
</style>
