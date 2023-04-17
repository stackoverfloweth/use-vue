<template>
  <div class="organization-page">
    <OrganizationFilter v-model:search="search" v-model:sorting="sorting" class="organization-page__filter" />
    <OrganizationList class="organization-page__list" :organizations="organizations" />
    <PaginationController v-model:pagination="pagination" class="organization-page__pagination" />
  </div>
</template>

<script lang="ts" setup>
  import { useSubscription } from '@prefecthq/vue-compositions'
  import { computed, ref } from 'vue'
  import OrganizationFilter from '@/components/OrganizationFilter.vue'
  import OrganizationList from '@/components/OrganizationList.vue'
  import PaginationController from '@/components/PaginationController.vue'
  import { getVueUsers } from '@/services/githubApi'
  import { Pagination } from '@/types/gitHub/pagination'
  import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'
  import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'
  import { UserSearchRequest } from '@/types/gitHub/useSearchRequest'

  const search = ref<UserSearchQuery>({
    type: 'Organization',
  })
  const sorting = ref<UserSearchSorting>({
    sort: 'joined',
    order: 'desc',
  })
  const pagination = ref<Pagination>({
    page: 1,
    perPage: 30,
  })

  const filter = computed<UserSearchRequest>(() => ({
    search: search.value,
    sorting: sorting.value,
    pagination: pagination.value,
  }))

  const organizationsSubscription = useSubscription(getVueUsers, [filter], { lifecycle: 'app' })
  const organizations = computed(() => organizationsSubscription.response ?? [])
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

.organization-page__list {
  max-height: 100%;
  overflow-y: auto;
  margin: 0 var(--space-2);
}
</style>