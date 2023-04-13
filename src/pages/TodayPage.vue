<template>
  <div class="today-page">
    <div class="today-page__count">
      <div class="today-page__count-header">
        Developers using Vue
      </div>
      <div class="today-page__count-value">
        {{ userCount }}
      </div>
    </div>

    <div class="today-page__count">
      <div class="today-page__count-header">
        Organizations using Vue
      </div>
      <div class="today-page__count-value">
        {{ orgCount }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useSubscription } from '@prefecthq/vue-compositions'
  import { computed } from 'vue'
  import { getVueUserCount } from '@/services/githubApi'

  const userCountSubscription = useSubscription(getVueUserCount, ['User'])
  const userCount = computed(() => userCountSubscription.response?.toLocaleString() ?? '--')

  const orgCountSubscription = useSubscription(getVueUserCount, ['Organization'])
  const orgCount = computed(() => orgCountSubscription.response?.toLocaleString() ?? '--')
</script>

<style>
:root {
  --font-size: 8vw;
}

.today-page {
  display: flex;
  justify-content: space-around;
  padding: var(--space-3);
  gap: var(--space-3);
  height: 92vh;
  background-position: center;
  background-size: cover;
  background-image: url('/vue-use.png');
}

.today-page__count {
  text-align: center;
}

.today-page__count-header {
  color: var(--slate-300);
  font-size: calc(var(--font-size) / 4);
}

.today-page__count-value {
  color: white;
  font-size: var(--font-size);
}

@media(max-width: 1024px){
  :root {
    --font-size: 8vw;
  }
}

@media(max-width: 768px){
  :root {
    --font-size: 10vw;
  }
}

@media(max-width: 640px){
  :root {
    --font-size: 12vw;
  }

  .today-page {
    flex-direction: column;
    justify-content: start;
  }
}
</style>