<template>
  <div class="user-filter-edit">
    <div class="user-filter-edit__details">
      form goes here
    </div>
    <div class="user-filter-edit__actions">
      <p-button flat @click="emit('cancel')">
        Cancel
      </p-button>
      <p-button @click="completeSearch">
        Search
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'
  import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'

  const props = defineProps<{
    search: UserSearchQuery,
    sorting: UserSearchSorting,
  }>()

  const emit = defineEmits<{
    (event: 'cancel'): void,
    (event: 'search', value: { search: UserSearchQuery, sorting: UserSearchSorting }): void,
  }>()

  function completeSearch(): void {
    // emit('search')
  }
</script>

<style>
.user-filter-edit {
  display: flex;
  flex-direction: column;
}

.user-filter-edit__search {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.user-filter-edit__actions {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
}
</style>