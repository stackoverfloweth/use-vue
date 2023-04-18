<template>
  <div class="user-filter-edit">
    <p-form class="user-filter-edit__form" @submit="completeSearch">
      <p-label label="Name">
        <template #default="{ id }">
          <p-text-input :id="id" v-model="name" />
        </template>
      </p-label>

      <!--
        <p-label label="Location">
        <template #default="{ id }">
        <p-text-input :id="id" v-model="searchValues.location" />
        </template>
        </p-label>
      -->

      <p-label label="Min Followers">
        <template #default="{ id }">
          <p-number-input :id="id" v-model="searchValues.followersMin" />
        </template>
      </p-label>

      <p-label label="Max Followers">
        <template #default="{ id }">
          <p-number-input :id="id" v-model="searchValues.followersMax" />
        </template>
      </p-label>

      <p-label label="Sort by">
        <template #default="{ id }">
          <p-select :id="id" v-model="sortValues.sort" :options="['followers', 'repositories', 'joined']" />
        </template>
      </p-label>

      <p-label label="Order">
        <template #default="{ id }">
          <p-select :id="id" v-model="sortValues.order" :options="['asc', 'desc']" />
        </template>
      </p-label>
    </p-form>
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
  import { computed, ref } from 'vue'
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

  const searchValues = ref<UserSearchQuery>({ ...props.search })
  const sortValues = ref<UserSearchSorting>({ ...props.sorting })

  const name = computed({
    get() {
      return searchValues.value.type === 'Organization' ? searchValues.value.orgName : searchValues.value.userName
    },
    set(value) {
      if (searchValues.value.type === 'Organization') {
        searchValues.value.orgName = value
      } else {
        searchValues.value.userName = value
      }
    },
  })

  function removeEmptyValues(input: Record<string, unknown>): Record<string, unknown> {
    const returnValue = { ...input }
    Object.entries(returnValue).forEach(([key, value]) => {
      if (value === undefined || value === null || typeof value === 'string' && value === '') {
        delete returnValue[key]
      }
    })

    return returnValue
  }

  function completeSearch(): void {
    emit('search', { search: removeEmptyValues(searchValues.value), sorting: removeEmptyValues(sortValues.value) })
  }
</script>

<style>
.user-filter-edit {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.user-filter-edit__actions {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
}
</style>