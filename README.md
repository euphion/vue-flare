# Vue Flare - notifications for Vue 3 and Nuxt 3

**The goal was to create simple, easy to set up notifications for Vue 3 in a beautiful design that no app or website would be ashamed of.**

>  **Note**: Plugin uses **Pinia** store management

## Installation

```bash
# npm
npm install --save vue-flare

# yarn
yarn add vue-flare
```

## Setup with Vue 3

```javascript
// main.ts

import "vue-flare/dist/style.css"
import VueFlare from "vue-flare"

createApp(App).use(VueFlare, {
  position: 'top-right',
  animation: 'fade-in',
  borderRadius: false,
  backdropFilterBlur: false,
  duration: 5000,
  maxWidth: '400px'
}).mount('#app')
```

or with yarn

```bash
yarn add vue-flare
```

```bash
yarn add vue-flare
```


## Usage

```vue
<!-- App.vue -->

<template>
    <div>
        {{ activeFlares }}
        {{ activeSettings }}
        <Flares />
        <div>
            <button @click='show'>show</button>
            <button @click='hide'>hide</button>
            <button @click='setNewSettings'>set new settings</button>
        </div>
    </div>
</template>
```

```typescript
// App.vue

import { computed, inject } from "vue";
import { Flares, FlareStoreInterface } from "vue-flare"

const flare = inject('flare') as FlareStoreInterface

const activeFlares = computed(() => flare.flares)
const activeSettings = computed(() => flare.settings)

function show () {
    flare.success({ title: "Success" })
    flare.info({ title: "Info", message: "Message" })
    flare.warning({ title: "Info", message: "Message", duration: 10000 })
    flare.error({ id: '78dd0a2b', title: "Info", message: "Message" })
}

function hide () {
    flare.hide('78dd0a2b')
}

function setNewSettings () {
    flare.setSettings({
        position: 'bottom-right',
        animation: 'fade-right',
        borderRadius: true,
        backdropFilterBlur: true,
        duration: 3000,
        maxWidth: '600px'
    })
}
```

You can even use global property `$flare`

```vue
<button @click='$flare.success({
    id: "78dd0a2b",
    title: "Info",
    message: "Message"
  })'>
show
</button>
```

## Customization

You can use custom component for notifications inside the `<Flares />` component

```vue
<!-- App.vue -->

<template>
  <div>
    <Flares>
      <Flare
          v-for="{ id, type, title, message, duration } of flare.flares"
          :key="`flare-${id}`"
          :type="type"
          :title="title"
          :message="message"
          :duration="duration"
          animation="fade-in"
          border-radius
          backdrop-filter-blur
          @close="flare.hide(id)"
      />
    </Flares>
  </div>
</template>
```

### Custom styles

```scss
// main.scss

.flares {
  &-top-left {}
  &-top-right {}
  &-top-center {}
  &-bottom-left {}
  &-bottom-right {}
  &-bottom-center {}
}

.flare {
  &-border-radius {}
  &-backdrop-filter-blur {}
  
  &-animation-fade-in {}
  &-animation-fade-top {}
  &-animation-fade-right {}
  &-animation-fade-bottom {}
  &-animation-fade-left {}
  
  &-loading {}
  &-icon {}
  &-title {}
  &-message {}
  &-close {
    &:hover {}
    svg {}
  }
  
  &-success {
    // light - #1fa55a
    // dark - #0e5f38
    &.flare-backdrop-filter-blur {}
    .flare-icon, .flare-close {}
    .flare-loading {}
  }
  
  &-info {
    // light - #1f6fe0
    // dark - #10488a
    &.flare-backdrop-filter-blur {}
    .flare-icon, .flare-close {}
    .flare-loading {}
  }
  
  &-warning {
    // light - #ee8d31
    // dark - #c34916
    &.flare-backdrop-filter-blur {}
    .flare-icon, .flare-close {}
    .flare-loading {}
  }
  
  &-error {
    // light - #dc3055
    // dark - #851d41
    &.flare-backdrop-filter-blur {}
    .flare-icon, .flare-close {}
    .flare-loading {}
  }
}
```

## Props

### `<Flare />`
```vue
<Flare
    :type="type"
    :title="title"
    :message="message"
    :duration="duration"
    animation="fade-in"
    border-radius
    backdrop-filter-blur
/>
```

| Name           | Description                     | Type    | Values                                                    | Default |
|----------------|---------------------------------|---------|-----------------------------------------------------------|---------|
| `type`*        | Type                            | String  | `success` `info` `warning` `error`                        | —       |
| `title`*       | Title                           | String  | —                                                         | —       |
| `animation`    | Animation                       | String  | `fade-in` `fade-top` `fade-right` `fade-bottom` `fade-left` | `fade-in` |
| `message`      | Title                           | String  | —                                                         | `''`    |
| `duration`*    | Duration of the flare           | Number  | —                                                         | —       |
| `borderRadius` | Border radius on the flare      | Boolean | —                                                         | `false` |
| `backdropFilterBlur`*    | Blurred background on the flare | Boolean | —                                                         | `false` |

### `flare.setSettings({ ...options })`
```javascript
flare.setSettings({
    position: 'bottom-right',
    animation: 'fade-right',
    borderRadius: true,
    backdropFilterBlur: true,
    duration: 3000,
    maxWidth: '600px'
})
```

| Name                 | Description                          | Type    | Values                                                     | Default  |
|----------------------|--------------------------------------|---------|------------------------------------------------------------|----------|
| `position`           | Position of the flares               | String  | `top-left` `top-right` `bottom-left` `bottom-right`        | `top-right` |
| `animation`          | Animation                            | String  | `fade-in` `fade-top` `fade-right` `fade-bottom` `fade-left` | `fade-in` |
| `borderRadius`       | Border radius on the flare           | Boolean | —                                                          | `false`  |
| `backdropFilterBlur` | Blurred background on the flare      | Boolean | —                                                          | `false`  |
| `duration`           | Duration of the flares in miliseconds | Number  | —                                                          | `5000` |
| `maxWidth`           | Max width of flares in `px` or `%`     | String  | —                                                          | `400px`  |

## Development

Make sure to install the dependencies and then run:

```bash
# yarn
yarn dev

# npm
npm run dev
```
