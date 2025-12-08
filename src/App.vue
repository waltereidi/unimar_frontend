
<script setup>
import Toast from './components/ToastMessage/ToastMessage.vue'
</script>

<template>

<div id="app">


    <main>
      <router-view />
      <Toast />
    </main>
 </div>
</template>

<script setup>
</script>

<style>

body {
  font-family: 'Literata', serif;
}
</style>
