<template>
  <div :class="flareClasses">
    <span
      v-if="hasLoading"
      class="flare-loading"
      :style="{ animationDuration: `${props.duration}ms` }"
    />
    <template v-if="hasIcon">
      <svg
        v-if="type === FlareTypeEnum.SUCCESS"
        class="flare-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 48 48"
      >
        <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
      </svg>
      <svg
        v-if="type === FlareTypeEnum.INFO"
        class="flare-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 48 48"
      >
        <path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
      </svg>
      <svg
        v-if="type === FlareTypeEnum.WARNING"
        class="flare-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 48 48"
      >
        <path d="M24 34q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 30.7 24 30.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 34 24 34Zm-1.35-7.65h3V13.7h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
      </svg>
      <svg
        v-if="type === FlareTypeEnum.ERROR"
        class="flare-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 48 48"
      >
        <path d="M24 34q.7 0 1.175-.475.475-.475.475-1.175 0-.7-.475-1.175Q24.7 30.7 24 30.7q-.7 0-1.175.475-.475.475-.475 1.175 0 .7.475 1.175Q23.3 34 24 34Zm-1.35-7.65h3V13.7h-3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
      </svg>
    </template>
    <div class="flare-title">
      {{ title }}
    </div>
    <div v-if="message" class="flare-message">
      {{ message }}
    </div>
    <button
      v-if="closable"
      class="flare-close"
      @click="emit('close')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 48 48"
      >
        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { FlareTypeEnum } from '~/enums/FlareTypeEnum'
import { FlareAnimationEnum } from '~/enums/FlareAnimationEnum'
import { FlareAnimationType } from '~/types/FlareAnimationType'
import { FlareTypeType } from '~/types/FlareTypeType'

const emit = defineEmits(['close'])

const props = defineProps({
  type: {
    type: String as PropType<FlareTypeType>,
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
  animation: {
    type: String as PropType<FlareAnimationType>,
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
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    required: true
  },
  closable: {
    type: Boolean,
    default: true
  },
  hasIcon: {
    type: Boolean,
    default: true
  },
  hasLoading: {
    type: Boolean,
    default: true
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

const flareClasses = computed(() => [
  'flare', `flare-animation-${props.animation}`,
  {
    'flare-success': props.type === FlareTypeEnum.SUCCESS,
    'flare-info': props.type === FlareTypeEnum.INFO,
    'flare-warning': props.type === FlareTypeEnum.WARNING,
    'flare-error': props.type === FlareTypeEnum.ERROR,
    'flare-has-icon': props.hasIcon,
    'flare-border-radius': props.borderRadius,
    'flare-backdrop-filter-blur': props.backdropFilterBlur,
  }
])
</script>

<style lang="scss">
.flare {
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 20px 35px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  overflow: hidden;

  &-has-icon {
    padding-left: 80px;
  }

  &-border-radius {
    clip-path: inset(0 0 0 0 round 10px);
  }

  &-backdrop-filter-blur {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  &-animation-fade-in {
    animation: fadeIn ease .5s;
  }

  &-animation-fade-top {
    animation: fadeTop ease .5s;
  }

  &-animation-fade-right {
    animation: fadeRight ease .25s;
  }

  &-animation-fade-bottom {
    animation: fadeBottom ease .5s;
  }

  &-animation-fade-left {
    animation: fadeLeft ease .5s;
  }

  &-loading {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    animation: loading linear;
  }

  &-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &-title {
    font-weight: bold;
    font-size: 18px;
  }

  &-message {
    font-size: 16px;
    margin-top: 5px;
  }

  &-close {
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

  &-success {
    // light - #1fa55a
    // dark - #0e5f38
    background-color: rgba(31, 166, 90, 1);

    &.flare-backdrop-filter-blur {
      background-color: rgba(31, 166, 90, 0.8);
    }

    .flare-icon, .flare-close {
      color: #0e5f38;
    }

    .flare-loading {
      background-color: #0e5f38;
    }
  }

  &-info {
    // light - #1f6fe0
    // dark - #10488a
    background-color: rgba(31, 112, 224, 1);

    &.flare-backdrop-filter-blur {
      background-color: rgba(31, 112, 224, 0.8);
    }

    .flare-icon, .flare-close {
      color: #10488a;
    }

    .flare-loading {
      background-color: #10488a;
    }
  }

  &-warning {
    // light - #ee8d31
    // dark - #c34916
    background-color: rgba(237, 140, 50, 1);

    &.flare-backdrop-filter-blur {
      background-color: rgba(237, 140, 50, 0.8);
    }

    .flare-icon, .flare-close {
      color: #c34916;
    }

    .flare-loading {
      background-color: #c34916;
    }
  }

  &-error {
    // light - #dc3055
    // dark - #851d41
    background-color: rgba(219, 48, 85, 1);

    &.flare-backdrop-filter-blur {
      background-color: rgba(219, 48, 85, 0.8);
    }

    .flare-icon, .flare-close {
      color: #851d41;
    }

    .flare-loading {
      background-color: #851d41;
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

  @keyframes loading {
    from {
      width: 0;
    }
    to {
      opacity: 100%;
    }
  }
}
</style>
