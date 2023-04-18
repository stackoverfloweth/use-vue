<template>
  <p-virtual-scroller class="engineer-list" :items="engineers" :item-estimate-height="66">
    <template #default="{ item }">
      <EngineerListItem :engineer="item" />
    </template>
  </p-virtual-scroller>
</template>

<script lang="ts" setup>
  import EngineerListItem from '@/components/EngineerListItem.vue'
  import { User } from '@/models'

  defineProps<{
    engineers: User[],
  }>()
</script>

<style>
.engineer-list {
  flex-grow: 1;
}
</style>