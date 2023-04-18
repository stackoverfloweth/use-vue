<template>
  <div v-if="canLoadMore" class="pagination-controller">
    <template v-if="hitGitHubMax">
      <p-button flat :loading="loading" @click="loadMore">
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
    pages: number,
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

  const canLoadMore = computed(() => page.value < props.pages)

  const hitGitHubMax = computed(() => {
    return page.value * pagination.value.perPage < 1000
  })

  function loadMore(): void {
    page.value++
  }
</script>

<style>
.pagination-controller {
  display: flex;
  justify-content: center;
  color: white;
}
</style>