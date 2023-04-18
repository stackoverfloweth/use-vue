<template>
  <div class="engineers-page">
    <UserFilter v-model:search="search" v-model:sorting="sorting" class="engineers-page__filter" />
    <EngineerList class="engineers-page__list" :engineers="engineers" />
    <template v-if="totalEngineers === 0">
      <div class="engineers-page__empty-results">
        No Results
        <p-button flat @click="resetSearch">
          Reset Filter
        </p-button>
      </div>
    </template>
    <template v-else>
      <div class="engineers-page__total-count">
        {{ totalEngineers?.toLocaleString() }} Total Results
      </div>
    </template>
    <PaginationController v-model:pagination="pagination" :pages="pages" :loading="engineersSubscription.loading" class="engineers-page__pagination" />
  </div>
</template>

<script lang="ts" setup>
  import { useSubscription } from '@prefecthq/vue-compositions'
  import { computed, ref, watch } from 'vue'
  import EngineerList from '@/components/EngineerList.vue'
  import PaginationController from '@/components/PaginationController.vue'
  import UserFilter from '@/components/UserFilter.vue'
  import { User } from '@/models'
  import { getVueUsers } from '@/services/githubApi'
  import { Pagination } from '@/types/gitHub/pagination'
  import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'
  import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'
  import { UserSearchRequest } from '@/types/gitHub/useSearchRequest'
  import { sameValue } from '@/utilities'

  const search = ref<UserSearchQuery>({
    type: 'User',
  })
  const sorting = ref<Required<UserSearchSorting>>({
    sort: 'followers',
    order: 'desc',
  })
  const pagination = ref<Required<Pagination>>({
    page: 1,
    perPage: 30,
  })

  const filter = computed<UserSearchRequest>(() => ({
    search: search.value,
    sorting: sorting.value,
    pagination: pagination.value,
  }))

  const engineersSubscription = useSubscription(getVueUsers, [filter])
  const totalEngineers = computed(() => engineersSubscription.response?.count)
  const pages = computed(() => {
    const totalItems = engineersSubscription.response?.count ?? 0
    return Math.ceil(totalItems / pagination.value.perPage)
  })
  const engineers = ref<User[]>([])

  function resetSearch(): void {
    search.value = {
      type: 'User',
    }
  }

  watch(() => engineersSubscription.response, value => {
    if (value) {
      engineers.value = engineers.value.concat(value.items)
    }
  })

  watch([search, sorting], (value, previous) => {
    if (sameValue(value, previous)) {
      return
    }

    pagination.value = {
      page: 1,
      perPage: 30,
    }

    engineers.value = []
  })
</script>

<style>
.engineers-page {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow-y: auto;
  gap: var(--space-2);
  padding-bottom: var(--space-2);
  background-color: rgba(255, 255, 255, 0.75);
}

.engineers-page__total-count {
  font-size: .85rem;
  color: var(--slate-500);
  font-style: italic;
  text-align: center;
}

.engineers-page__empty-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.engineers-page__list {
  max-height: 100%;
  overflow-y: auto;
  margin: 0 var(--space-2);
}
</style>