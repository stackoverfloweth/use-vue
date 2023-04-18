<template>
  <div class="today-page">
    <router-link class="today-page__count" :to="routes.developers()">
      <div class="today-page__count-header">
        GitHub Developers using Vue
      </div>
      <div class="today-page__count-value">
        {{ userCount }}
      </div>
    </router-link>

    <router-link class="today-page__count" :to="routes.organizations()">
      <div class="today-page__count-header">
        GitHub Organizations using Vue
      </div>
      <div class="today-page__count-value">
        {{ orgCount }}
      </div>
    </router-link>

    <div class="today-page__mission">
      <MissionStatement />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useSubscription } from '@prefecthq/vue-compositions'
  import { computed } from 'vue'
  import MissionStatement from '@/components/MissionStatement.vue'
  import { routes } from '@/router/routes'
  import { getVueUserCount } from '@/services/githubApi'

  const userCountSubscription = useSubscription(getVueUserCount, ['User'], { lifecycle: 'app' })
  const userCount = computed(() => userCountSubscription.response?.toLocaleString() ?? '--')

  const orgCountSubscription = useSubscription(getVueUserCount, ['Organization'], { lifecycle: 'app' })
  const orgCount = computed(() => orgCountSubscription.response?.toLocaleString() ?? '--')
</script>

<style>
:root {
  --font-size: 8vw;
}

.today-page {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: var(--space-3);
  gap: var(--space-3);
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

.today-page__mission {
  display: flex;
  justify-content: center;
  grid-column: 1 / -1;
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

  .today-page {
    padding: 0;
    padding-top: var(--space-3);
  }
}

@media(max-width: 640px){
  :root {
    --font-size: 12vw;
  }

  .today-page {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>