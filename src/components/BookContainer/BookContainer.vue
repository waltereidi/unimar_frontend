<script setup>
    import { ref } from 'vue'
    import BookCard from '@/components/BookCard/BookCard.vue';
</script>
<template>
  <div class="w-full bg-white py-10">
    <div class="max-w-2/3 mx-auto px-4">

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        <!-- 8 cards -->
        <BookCard
          v-for="n in 8"
          :key="n"
        />
      </div>

    </div>
  </div>
</template>