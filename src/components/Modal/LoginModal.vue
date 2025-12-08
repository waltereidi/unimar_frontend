<template>
<!-- Modal -->
     <section class="mb-3" @click="clickModal"> 
      <slot >
        <!-- Conteúdo padrão do slot principal -->
        <p>Abrir Modal</p>
      </slot>
    </section>

  <div v-if="showModal"
   
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-xl shadow-lg w-80 p-6 relative">

      <!-- Botão Fechar -->
      <button
        
        class="absolute top-3 right-3 text-gray-500 hover:text-black" @click="clickModal">
        ✕
      </button>

      <h2 class="text-xl font-semibold text-center mb-4">Login</h2>

      <input
        type="text"
        placeholder="Email"
        class="w-full p-2 border rounded mb-3"
      />

      <input
        type="password"
        placeholder="Senha"
        class="w-full p-2 border rounded mb-4"
      />

      <button
        class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        @click="login"
      >
        Entrar
      </button>

    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { showToast } from '@/components/ToastMessage/toast.js'
const showModal = ref(false)

function clickModal() {
  showModal.value =!showModal.value;
}
function login()
{
  
}
function enviar() {
  showToast("Enviado com sucesso!", 2500)
}

</script>