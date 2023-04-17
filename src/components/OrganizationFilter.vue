<template>
  <div class="organization-filter">
    <div class="organization-filter__details">
      <div v-if="searchSummaries.length" class="organization-filter__search">
        Where
        <template v-for="(searchSummary, index) in searchSummaries" :key="searchSummary.key">
          <div class="organization-filter__search-sm">
            <strong>{{ searchSummary.key }}</strong> is "{{ searchSummary.value }}"
          </div>
          <template v-if="index !== searchSummaries.length - 1">
            and
          </template>
        </template>
      </div>
      <div class="organization-filter__sort">
        Sorted by <strong>{{ sorting.sort }}</strong> {{ sorting.order }}
      </div>
    </div>
    <div class="organizations-filter__actions">
      <p-button>
        Change
      </p-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'
  import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'

  const props = defineProps<{
    search: UserSearchQuery,
    sorting: UserSearchSorting,
  }>()

  const emit = defineEmits<{
    (event: 'update:search', value: UserSearchQuery): void,
    (event: 'update:sorting', value: UserSearchSorting): void,
  }>()

  const search = computed({
    get() {
      return props.search
    },
    set(value) {
      emit('update:search', value)
    },
  })

  const sorting = computed({
    get() {
      return props.sorting
    },
    set(value) {
      emit('update:sorting', value)
    },
  })

  const editing = ref(false)

  const searchSummaries = computed(() => {
    return Object.entries(search.value)
      // .filter(([key]) => key !== 'type')
      .map(([key, value]) => ({
        key,
        value,
      }))
  })
</script>

<style>
.organization-filter {
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: .85rem;
  color: var(--slate-800);
  padding: var(--space-2);
}

.organization-filter__search {
  grid-area: search;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.organization-filter__sort {
  grid-area: sort;
}

.organization-filter__actions {
  grid-area: actions;
}
</style>