<template>
  <div class="pagination-controller">
    <template v-if="canLoadMore">
      <p-button flat rounded :loading="loading" @click="loadMore">
        Load More
      </p-button>
    </template>
    <template v-else>
      <p>You've reached the limit of results available on GitHub. Try narrowing your search criteria.</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { Pagination } from '@/types/gitHub/pagination'

  const props = defineProps<{
    pagination: Required<Pagination>,
    loading?: boolean,
  }>()

  const emit = defineEmits<{
    (event: 'update:pagination', value: Pagination): void,
  }>()

  const pagination = computed({
    get() {
      return props.pagination
    },
    set(value) {
      emit('update:pagination', value)
    },
  })

  const page = computed({
    get() {
      return pagination.value.page
    },
    set(value) {
      pagination.value = {
        ...pagination.value,
        page: value,
      }
    },
  })

  const canLoadMore = computed(() => {
    const gitHubMax = 1000
    return page.value * pagination.value.perPage < gitHubMax
  })

  function loadMore(): void {
    page.value++
  }
</script>

<style>
.pagination-controller {
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-2);
  color: white;
}
</style>