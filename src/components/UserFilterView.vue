<template>
  <div class="user-filter-view">
    <div class="user-filter-view__details">
      <div v-if="searchSummaries.length" class="user-filter-view__search">
        Where
        <template v-for="(searchSummary, index) in searchSummaries" :key="searchSummary.key">
          <div class="user-filter-view__search-summary">
            <strong>{{ searchSummary.key }}</strong> is "{{ searchSummary.value }}"
          </div>
          <template v-if="index !== searchSummaries.length - 1">
            and
          </template>
        </template>
      </div>
      <div class="user-filter-view__sort">
        Sorted by <strong>{{ sorting.sort }}</strong> {{ sorting.order }}
      </div>
    </div>
    <div class="user-filter-view__actions">
      <p-button @click="emit('edit')">
        Change
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'
  import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'

  const props = defineProps<{
    search: UserSearchQuery,
    sorting: UserSearchSorting,
  }>()

  const emit = defineEmits<{
    (event: 'edit'): void,
  }>()

  function mapKeys(key: string): string {
    switch (key) {
      case 'userName':
      case 'orgName':
        return 'name'
      case 'followersMin':
        return 'min-followers'
      case 'followersMax':
        return 'max-followers'
      default: return key
    }
  }

  const searchSummaries = computed(() => {
    return Object.entries(props.search)
      .filter(([key]) => key !== 'type')
      .map(([key, value]) => ({
        key: mapKeys(key),
        value,
      }))
  })
</script>

<style>
.user-filter-view {
  display: flex;
  justify-content: space-between;
}

.user-filter-view__search {
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--space-1);
}
</style>