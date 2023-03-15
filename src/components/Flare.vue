<template>
  <div :class="flareClasses">
    <svg class="flare__icon">
      <use :xlink:href="`/icons.svg#${iconIdentifier}`" />
    </svg>
    <div class="flare__title">
      {{ title }}
    </div>
    <div v-if="message" class="flare__message">
      {{ message }}
    </div>
    <button class="flare__close" @click="emit('close')">
      <svg>
        <use :xlink:href="`/icons.svg#close`" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue"
import { FlareTypeEnum } from "~/enums/FlareTypeEnum"
import { FlareAnimationEnum } from "~/enums/FlareAnimationEnum";

const emit = defineEmits(["close"])

const props = defineProps({
  type: {
    type: String as PropType<FlareTypeEnum>,
    required: true,
    validator(value: FlareTypeEnum) {
      return [
        FlareTypeEnum.SUCCESS,
        FlareTypeEnum.INFO,
        FlareTypeEnum.WARNING,
        FlareTypeEnum.ERROR
      ].includes(value)
    }
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: ""
  },
  borderRadius: {
    type: Boolean,
    default: false
  },
  backdropFilterBlur: {
    type: Boolean,
    default: false
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
})

const iconMap = {
  [FlareTypeEnum.SUCCESS]: "check",
  [FlareTypeEnum.INFO]: "info",
  [FlareTypeEnum.WARNING]: "error",
  [FlareTypeEnum.ERROR]: "error",
};

const iconIdentifier = computed(() => {
  return iconMap[props.type] || "info";
});

const flareClasses = computed(() => [
  'flare', `flare--animation-${props.animation}`,
  {
    'flare--success': props.type === FlareTypeEnum.SUCCESS,
    'flare--info': props.type === FlareTypeEnum.INFO,
    'flare--warning': props.type === FlareTypeEnum.WARNING,
    'flare--error': props.type === FlareTypeEnum.ERROR,
    'flare--border-radius': props.borderRadius,
    'flare--backdrop-filter-blur': props.backdropFilterBlur,
  }
])
</script>

<style scoped lang="scss">
.flare {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 20px 35px 20px 80px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  &--border-radius {
    border-radius: 10px;
  }

  &--backdrop-filter-blur {
    backdrop-filter: blur(10px);
  }

  &--animation-fade-in {
    animation: fadeIn ease .5s;
  }

  &--animation-fade-top {
    animation: fadeTop ease .5s;
  }

  &--animation-fade-right {
    animation: fadeRight ease .5s;
  }

  &--animation-fade-bottom {
    animation: fadeBottom ease .5s;
  }

  &--animation-fade-left {
    animation: fadeLeft ease .5s;
  }

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
    background-color: rgba(31, 166, 90, 1);

    &.flare--backdrop-filter-blur {
      background-color: rgba(31, 166, 90, 0.8);
    }

    .flare__icon, .flare__close {
      color: #0e5f38;
    }
  }

  &--info {
    // light - #1f6fe0
    // dark - #10488a
    background-color: rgba(31, 112, 224, 1);

    &.flare--backdrop-filter-blur {
      background-color: rgba(31, 112, 224, 0.8);
    }

    .flare__icon, .flare__close {
      color: #10488a;
    }
  }

  &--warning {
    // light - #ee8d31
    // dark - #c34916
    background-color: rgba(237, 140, 50, 1);

    &.flare--backdrop-filter-blur {
      background-color: rgba(237, 140, 50, 0.8);
    }

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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeTop {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeRight {
    from {
      opacity: 0;
      transform: translateX(400px);
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeBottom {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeLeft {
    from {
      opacity: 0;
      transform: translateX(-400px);
    }
    to {
      opacity: 1;
    }
  }
}
</style>
