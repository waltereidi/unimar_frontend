<template>

<div class="flex w-full h-32 p-2">
  <div class="w-1/5 flex items-center justify-center" >

  </div>
  <div class="w-3/5 flex items-center justify-center text-[32px]"> Livros Expo</div>
  <div class="w-1/5 flex items-center justify-end pr-4">

 <button
        @click="openModal"
        class="flex items-center gap-2 text-gray-400 hover:text-gray-600 text-lg font-medium">
        <!-- Ícone SVG -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.121 17.804A9 9 0 1119.5 12m-7.5 9a9 9 0 019-9"
          />
        </svg>

        <!-- Nome do usuário -->
        Login
      </button>
    </div>
  <LoginModal v-if="showModal" @close="closeModal" />
</div>  
    
</template>
<script setup>
import { ref } from 'vue'
import LoginModal from '@/components/Modal/LoginModal.vue'

const showModal = ref(false)

function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>