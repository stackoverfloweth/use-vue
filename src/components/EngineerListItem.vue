<template>
  <p-link class="engineer-list-item" :to="engineer.htmlUrl">
    <img class="engineer-list-item__avatar" :src="engineer.avatarUrl" alt="engineer-avatar">
    <div class="engineer-list-item__name">
      {{ engineer.login }}
    </div>
  </p-link>
</template>

<script lang="ts" setup>
  import { User } from '@/models'

  defineProps<{
    engineer: User,
  }>()
</script>

<style>
.engineer-list-item {
  display: flex;
  align-items: center;
  text-decoration-line: none !important;
  gap: var(--space-3);
  padding: var(--space-2);
  background-color: white;
}

.engineer-list-item__avatar {
  border-radius: 100%;
  overflow: hidden;
  width: 50px;
}

.engineer-list-item__name {
  color: var(--slate-900);
}
</style>