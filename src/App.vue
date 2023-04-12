<template>
  <NavigationHeader />
  <router-view :key="$route.fullPath" />
</template>

<script lang="ts" setup>
  import { useColorTheme } from '@prefecthq/prefect-design'
  import NavigationHeader from '@/components/NavigationHeader.vue'
  import { githubApi } from '@/services'

  const { setTheme } = useColorTheme()
  setTheme('light')

  // const users = await githubApi.getVueUsers()

  // console.log({ users })
</script>

<style>
  html, body {
    background-color: var(--green-50);
  }
</style>