<template>
  <p-link class="organization-list-item">
    <img class="organization-list-item__avatar" :src="organization.avatarUrl" alt="organization-avatar">
    <div class="organization-list-item__name">
      {{ organization.login }}
    </div>
  </p-link>
</template>

<script lang="ts" setup>
  import { User } from '@/models'

  defineProps<{
    organization: User,
  }>()
</script>

<style>
.organization-list-item {
  display: flex;
  align-items: center;
  text-decoration-line: none !important;
  gap: var(--space-3);
  padding: var(--space-2);
  background-color: white;
}

.organization-list-item__avatar {
  border-radius: 100%;
  overflow: hidden;
  width: 50px;
}

.organization-list-item__name {
  color: var(--slate-900);
}
</style>