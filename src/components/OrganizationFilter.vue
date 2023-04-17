<template>
  <div class="organization-filter">
    search, sort
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
</script>

<style>
.organization-filter {
  background-color: white;
}
</style>