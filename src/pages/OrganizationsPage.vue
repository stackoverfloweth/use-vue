<template>
  <div class="organization-page">
    <OrganizationFilter v-model:search="search" v-model:sorting="sorting" class="organization-page__filter" />
    <OrganizationList class="organization-page__list" :organizations="organizations" />
    <div class="organizations-page__total-count">
      {{ totalOrganizations?.toLocaleString() }} Total Results
    </div>
    <PaginationController v-model:pagination="pagination" :loading="organizationsSubscription.loading" class="organization-page__pagination" />
  </div>
</template>

<script lang="ts" setup>
  import { useSubscription } from '@prefecthq/vue-compositions'
  import { computed, ref, watch } from 'vue'
  import OrganizationFilter from '@/components/OrganizationFilter.vue'
  import OrganizationList from '@/components/OrganizationList.vue'
  import PaginationController from '@/components/PaginationController.vue'
  import { User } from '@/models'
  import { getVueUsers } from '@/services/githubApi'
  import { Pagination } from '@/types/gitHub/pagination'
  import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'
  import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'
  import { UserSearchRequest } from '@/types/gitHub/useSearchRequest'

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
  const organizations = ref<User[]>([])

  watch(() => organizationsSubscription.response, value => {
    if (value) {
      organizations.value = organizations.value.concat(value.items)
    }
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
  background-color: rgba(255, 255, 255, 0.75);
}

.organizations-page__total-count {
  font-size: .85rem;
  color: var(--slate-500);
  font-style: italic;
  text-align: center;
}

.organization-page__list {
  max-height: 100%;
  overflow-y: auto;
  margin: 0 var(--space-2);
}
</style>