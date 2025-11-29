

<template>

  <div id="app">
    <nav>
      <HomePage></HomePage>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import HomePage from '@/components/HomePage.vue'
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

nav {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #1976d2;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>
