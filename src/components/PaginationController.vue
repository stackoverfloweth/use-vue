<template>
  <div class="pagination-controller">
    pagination-controller
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { Pagination } from '@/types/gitHub/pagination'

  const props = defineProps<{
    pagination: Pagination,
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
</script>

<style>
.pagination-controller {
  color: white;
}
</style>