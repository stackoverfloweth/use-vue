<template>
  <div class="organization-list">
    <template v-for="organization in organizations" :key="organization.id">
      <OrganizationListItem :organization="organization" />
    </template>
  </div>
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
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
</style>