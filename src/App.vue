<template>
  <Flares />
  <div class="vue-flare">
    <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    <h1>VueFlare</h1>
    <fieldset>
      <label>
        Title
        <input v-model="settings.title" type="text" name="title">
      </label>
    </fieldset>
    <fieldset>
      <textarea
        v-model="settings.message"
        name="message"
        rows="4"
        cols="50"
      />
    </fieldset>
    <fieldset>
      <label>
        Duration
        <input
          v-model="settings.duration"
          type="number"
          step="1000"
          name="duration"
        >
        ms
      </label>
    </fieldset>
    <fieldset>
      <label>
        <input v-model="settings.displayFromTop" type="checkbox" name="display-from-top">
        Display from top
      </label>
      <label>
        <input v-model="settings.duplicationEnabled" type="checkbox" name="duplication-enabled">
        Duplication enabled
      </label>
      <label>
        <input v-model="settings.hasIcon" type="checkbox" name="has-icon">
        Has icon
      </label>
      <label>
        <input v-model="settings.hasLoading" type="checkbox" name="has-loading">
        Has loading
      </label>
      <label>
        <input v-model="settings.closable" type="checkbox" name="closable">
        Closable
      </label>
      <label>
        <input v-model="settings.borderRadius" type="checkbox" name="border-radius">
        Border radius
      </label>
      <label>
        <input v-model="settings.backdropFilterBlur" type="checkbox" name="backdrop-filter-blur">
        Backdrop filter blur
      </label>
    </fieldset>
    <fieldset>
      <h3>Animation</h3>
      <label v-for="animation of FlareAnimationEnum" :key="`animation-${animation}`">
        <input
          v-model="settings.animation"
          type="radio"
          name="animation"
          :value="animation"
        >
        {{ animation }}
      </label>
    </fieldset>
    <fieldset>
      <h3>Position</h3>
      <label v-for="position of FlarePositionEnum" :key="`position-${position}`">
        <input
          v-model="settings.position"
          type="radio"
          name="position"
          :value="position"
        >
        {{ position }}
      </label>
    </fieldset>
    <div class="actions">
      <button type="button" @click="success">
        success
      </button>
      <button type="button" @click="info">
        info
      </button>
      <button type="button" @click="error">
        error
      </button>
      <button type="button" @click="warning">
        warning
      </button>
    </div>
    <div class="links">
      <a href="https://github.com/euphion/vue-flare" target="_blank">GitHub</a>
      <a href="https://www.npmjs.com/package/vue-flare" target="_blank">NPM</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Flares from '~/components/Flares.vue'
import { useFlareStore } from '~/stores/FlareStore'
import { reactive, watchEffect } from 'vue'
import { FlareAnimationEnum } from '~/enums/FlareAnimationEnum'
import { FlarePositionEnum } from '~/enums/FlarePositionEnum'

const settings = reactive({
  position: FlarePositionEnum.TOP_RIGHT,
  animation: FlareAnimationEnum.FADE_IN,
  borderRadius: false,
  backdropFilterBlur: false,
  title: 'Title',
  message: 'Message',
  duration: 5000,
  closable: true,
  hasIcon: true,
  hasLoading: true,
  maxWidth: '400px',
  duplicationEnabled: true,
  displayFromTop: true
})

const flareStore = useFlareStore()

function success () {
  flareStore.success({
    title: settings.title,
    message: settings.message,
    duration: settings.duration,
    closable: settings.closable,
    hasIcon: settings.hasIcon,
    hasLoading: settings.hasLoading,
  })
}

function info () {
  flareStore.info({
    title: settings.title,
    message: settings.message,
    duration: settings.duration,
    hasIcon: settings.hasIcon,
    hasLoading: settings.hasLoading,
  })
}

function error () {
  flareStore.error({
    title: settings.title,
    message: settings.message,
    duration: settings.duration,
    hasIcon: settings.hasIcon,
    hasLoading: settings.hasLoading,
  })
}

function warning () {
  flareStore.warning({
    title: settings.title,
    message: settings.message,
    duration: settings.duration,
    hasIcon: settings.hasIcon,
    hasLoading: settings.hasLoading,
  })
}

watchEffect(() => {
  flareStore.setSettings(settings)
})
</script>

<style scoped lang="scss">
.vue-flare {
  h1 {
    margin-top: 0;
  }

  h3 {
    margin-top: 5px;
  }

  fieldset {
    border: none;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
      filter: drop-shadow(0 0 30px #42b883aa);
    }
  }

  .actions {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 30px;
  }

  .links {
    padding: 40px 10px;
    display: flex;
    justify-content: center;
    gap: 10px;

    a {
      font-weight: bold;
      color: #FFFFFF;
      text-decoration: underline;
    }
  }
}
</style>
