<template>
  <p-virtual-scroller class="organization-list" :items="organizations" :item-estimate-height="66">
    <template #default="{ item }">
      <OrganizationListItem :organization="item" />
    </template>
  </p-virtual-scroller>
</template>

<script lang="ts" setup>
  import OrganizationListItem from '@/components/OrganizationListItem.vue'
  import { User } from '@/models'

  defineProps<{
    organizations: User[],
  }>()
</script>

<style>
.organization-list {
  flex-grow: 1;
}
</style>