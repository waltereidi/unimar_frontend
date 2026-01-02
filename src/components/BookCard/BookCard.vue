<template>
  <div class="p-4 bg-white rounded-xl">
    <div class="h-40 bg-gray-200 rounded-lg mb-8 overflow-hidden">
      <img 
        :src="thumbnailSrc"
        alt="Imagem"
        class="w-full h-auto rounded-xl shadow"
        @error="onImageError"
      />
    </div>

    <h3 class="text-lg font-regular text-center text-[16px]">
      {{ title }}
    </h3>
    <p class="text-lg font-regular text-center text-[16px]">
      {{ created_at }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

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

const FILE_SERVER = import.meta.env.VITE_FILE_SERVER
const defaultImage = `${FILE_SERVER}/defaultBook.png`

const currentSrc = ref('')

const thumbnailSrc = computed(() => {
  return props.thumbnail
    ? `${FILE_SERVER}/${props.thumbnail}`
    : defaultImage
})

const onImageError = (event) => {
  event.target.src = defaultImage
}
</script>
