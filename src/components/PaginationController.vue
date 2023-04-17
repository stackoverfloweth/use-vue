<template>
  <div class="pagination-controller">
    <template v-if="!isAtBeginning">
      <p-button flat rounded size="sm" @click="pagination.page = 1">
        1
      </p-button>
      <div class="pagination-controller__ellipsis">
        ...
      </div>
    </template>
    <template v-for="nearbyPage in nearbyPages" :key="nearbyPage">
      <p-button flat rounded size="sm" :disabled="pagination.page === nearbyPage" @click="pagination.page = nearbyPage">
        {{ nearbyPage }}
      </p-button>
    </template>
    <template v-if="!isAtEnd">
      <div class="pagination-controller__ellipsis">
        ...
      </div>
      <p-button flat rounded size="sm" :disabled="pagination.page === pages" @click="pagination.page = pages">
        {{ pages }}
      </p-button>
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { Pagination } from '@/types/gitHub/pagination'

  const props = defineProps<{
    pagination: Required<Pagination>,
    pages: number,
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

  const isAtBeginning = computed(() => pagination.value.page < 5)
  const isAtEnd = computed(() => pagination.value.page + 4 > props.pages)

  const nearbyPages = computed(() => {
    if (isAtBeginning.value) {
      return new Array(5).fill(null).map((___, index) => index + 1)
    }

    if (isAtEnd.value) {
      return new Array(5).fill(null).map((___, index) => index + props.pages - 4)
    }

    return [
      pagination.value.page - 2,
      pagination.value.page - 1,
      pagination.value.page,
      pagination.value.page + 1,
      pagination.value.page + 2,
    ]
  })
</script>

<style>
.pagination-controller {
  color: white;
  display: flex;
  gap: var(--space-2);
  padding: 0 var(--space-2);
  margin-bottom: var(--space-2);
}

.pagination-controller__ellipsis {
  flex-grow: 1;
  text-align: center;
}
</style>