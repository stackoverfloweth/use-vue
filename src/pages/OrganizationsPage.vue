<template>
  <div class="organization-page">
    <UserFilter v-model:search="search" v-model:sorting="sorting" class="organization-page__filter" />
    <OrganizationList class="organization-page__list" :organizations="organizations" />
    <template v-if="totalOrganizations === 0">
      <div class="organizations-page__empty-results">
        No Results
        <p-button flat @click="resetSearch">
          Reset Filter
        </p-button>
      </div>
    </template>
    <template v-else>
      <div class="organizations-page__total-count">
        {{ totalOrganizations?.toLocaleString() }} Total Results
      </div>
    </template>
    <PaginationController v-model:pagination="pagination" :pages="pages" :loading="organizationsSubscription.loading" class="organization-page__pagination" />
  </div>
</template>

<script lang="ts" setup>
  import { useSubscription } from '@prefecthq/vue-compositions'
  import { computed, ref, watch } from 'vue'
  import OrganizationList from '@/components/OrganizationList.vue'
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
    type: 'Organization',
  })
  const sorting = ref<Required<UserSearchSorting>>({
    sort: 'joined',
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

  const organizationsSubscription = useSubscription(getVueUsers, [filter], { lifecycle: 'app' })
  const totalOrganizations = computed(() => organizationsSubscription.response?.count)
  const pages = computed(() => {
    const totalItems = organizationsSubscription.response?.count ?? 0
    return Math.ceil(totalItems / pagination.value.perPage)
  })
  const organizations = ref<User[]>([])

  function resetSearch(): void {
    search.value = {
      type: 'Organization',
    }
  }

  watch(() => organizationsSubscription.response, value => {
    if (value) {
      organizations.value = organizations.value.concat(value.items)
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

    organizations.value = []
  })
</script>

<style>
.organization-page {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow-y: auto;
  gap: var(--space-2);
  padding-bottom: var(--space-2);
  background-color: rgba(255, 255, 255, 0.75);
}

.organizations-page__total-count {
  font-size: .85rem;
  color: var(--slate-500);
  font-style: italic;
  text-align: center;
}

.organizations-page__empty-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.organization-page__list {
  max-height: 100%;
  overflow-y: auto;
  margin: 0 var(--space-2);
}
</style>