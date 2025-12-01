<script setup>
import { ref } from 'vue'
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue'
import MainBanner from '@/components/MainBanner/MainBanner.vue';
import BoookContainer from '@/components/BookContainer/BookContainer.vue';
import ContatoContainer from '../../components/ContatoContainer/ContatoContainer.vue';
</script>

<template>


<div class="d-flex flex-col " >
  <HomeHeader>  </HomeHeader>
  <MainBanner> </MainBanner>
  <BoookContainer> </BoookContainer> 
  <ContatoContainer> </ContatoContainer>
</div>
</template>

<style scoped>
</style>
