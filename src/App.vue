<template>
  <div>
    <Flares />
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="card">
    <button type="button" @click="add">add success</button>
  </div>
</template>

<script setup lang="ts">
import Flares from "./components/Flares.vue";
import { useFlareStore } from "./stores/FlareStore"
import {FlareTypeEnum} from "./enums/FlareTypeEnum";

const flareStore = useFlareStore()

function add() {
  flareStore.show(Math.random().toString(), "Hello", "Message", FlareTypeEnum.SUCCESS, 5000)
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
