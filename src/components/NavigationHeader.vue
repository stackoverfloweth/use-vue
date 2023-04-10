<template>
  <div class="navigation-header">
    <div class="navigation-header__title">
      <img src="/vue-use-logo.png" class="navigation-header__logo" />
      <p>Use Vue</p>
    </div>
    <p-button class="navigation-header__github-link" size="lg" icon="GitHubIcon" to="https://github.com/stackoverfloweth/use-vue" flat rounded  />
  </div>
</template>

<style>
.navigation-header {
  display: flex;
  padding: var(--space-3);
  gap: var(--space-3);
  border-bottom: 1px solid var(--slate-200);
  align-items: center;
  justify-content: space-between;
  height: 8vh;
}

.navigation-header__title {
  display: flex;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--slate-600);
  gap: var(--space-3);
  align-items: center;
}

.navigation-header__logo {
  height: 2rem;
}

.navigation-header__github-link {
  padding: var(--space-1) !important;
}

.navigation-header__github-link .p-icon {
  height: 1.75rem;
  width: 1.75rem;
}
</style>