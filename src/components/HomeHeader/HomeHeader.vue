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
        <font-awesome-icon icon="user" class="text-gray-700 text-2xl" />

        <!-- Nome do usuário -->
        Login
      </button>
    </div>
  <LoginModal  />
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