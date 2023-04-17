<template>
  <NavigationHeader class="app__navigation" />
  <router-view :key="$route.fullPath" />
</template>

<script lang="ts" setup>
  import { useColorTheme } from '@prefecthq/prefect-design'
  import NavigationHeader from '@/components/NavigationHeader.vue'

  const { setTheme } = useColorTheme()
  setTheme('light')
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-image: url('/vue-use.png');
  height: 100vh;
  overflow-y: auto;
}

.app__navigation {
  position: sticky;
  top: 0;
}
</style>