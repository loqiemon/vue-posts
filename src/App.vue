<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Main from './views/Main.vue';


</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Посты</RouterLink>
        <RouterLink to="/add">Форма</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 5%;
  width: 100%;
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}


nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
