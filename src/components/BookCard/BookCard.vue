<template>
  <div class="p-4 bg-white rounded-xl">
    <div class="h-40 bg-gray-200 rounded-lg mb-8 overflow-hidden">
      <img 
        :src="thumbnailSrc"
        alt="Imagem"
        class="w-full h-auto rounded-xl shadow"
        @error="defaultThumb"
      />
    </div>

    <h3 class="text-lg font-regular text-center text-[16px]">
      {{title}}
    </h3>
    <p class="text-lg font-regular text-center text-[16px]">{{created_at}}</p>
  </div>
</template>


<script setup>
import { computed } from 'vue'

const props = defineProps({
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
    default: ''
  }
})
const thumbBaseUrl = new URL('@/assets/thumbNails/', import.meta.url).href
const thumbnailSrc = computed(() => {
const defaultThumb =()=> `${thumbBaseUrl}/defaultBook.png`;

  console.log(thumbBaseUrl)
  return props.thumbnail
    ? `${thumbBaseUrl}/${props.thumbnail}`
    : `${thumbBaseUrl}/defaultBook.png`
})
</script>