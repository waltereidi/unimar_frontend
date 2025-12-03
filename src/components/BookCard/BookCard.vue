<template>
  <div class="p-4 bg-white rounded-xl">
    <div class="h-40 bg-gray-200 rounded-lg mb-8 overflow-hidden">
      <img 
        :src="thumbnail"
        alt="Imagem"
        class="w-full h-auto rounded-xl shadow"
      />
    </div>

    <h3 class="text-lg font-regular text-center text-[16px]">
      {{title}}
    </h3>
    <p class="text-lg font-regular text-center text-[16px]">{{created_at}}</p>
  </div>
</template>


<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: false,
    default: ""
  }
});
</script>