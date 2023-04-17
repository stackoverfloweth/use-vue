<template>
  <div class="user-filter">
    <template v-if="editing">
      <UserFilterEdit :search="search" :sorting="sorting" @search="updateSearchCriteria" @cancel="closeEditor" />
    </template>
    <template v-else>
      <UserFilterView :search="search" :sorting="sorting" @edit="openEditor" />
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import UserFilterEdit from '@/components/UserFilterEdit.vue'
  import UserFilterView from '@/components/UserFilterView.vue'
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

  function openEditor(): void {
    editing.value = true
  }

  function updateSearchCriteria(criteria: { search: UserSearchQuery, sorting: UserSearchSorting }): void {
    closeEditor()
  }

  function closeEditor(): void {
    editing.value = false
  }
</script>

<style>
.user-filter {
  background-color: white;
  font-size: .85rem;
  color: var(--slate-800);
  padding: var(--space-2);
}
</style>