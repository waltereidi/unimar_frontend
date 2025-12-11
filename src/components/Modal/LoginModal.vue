<template>
  <!-- Modal -->
  <section class="mb-3" @click="clickModal">
    <slot>
      <p>Abrir Modal</p>
    </slot>
  </section>

  <div
    v-if="showModal"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-xl shadow-lg w-80 p-6 relative">

      <!-- Botão Fechar -->
      <button
        class="absolute top-3 right-3 text-gray-500 hover:text-black"
        @click="clickModal"
      >
        ✕
      </button>

      <h2 class="text-xl font-semibold text-center mb-4">Login</h2>

      <input
        type="text"
        placeholder="Email"
        class="w-full p-2 border rounded mb-3"
        v-model="email"
        ref="emailRef"
      />

      <input
        type="password"
        placeholder="Senha"
        class="w-full p-2 border rounded mb-4"
        v-model="password"
        ref="passwordRef"
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
import { useAuthStore } from '@/store/store.js'
import { authentication } from '@/services/httpRequest.js'

const authStore = useAuthStore()
const showModal = ref(false)

// refs para os inputs
const email = ref('')
const password = ref('')

const emailRef = ref(null)
const passwordRef = ref(null)

function clickModal() {
  showModal.value = !showModal.value
}

async function login() {
  console.log('Login iniciado')

  if (!email.value || !password.value) {
    showToast("Preencha todos os campos!", 2500)
    return;
  }

  try {
    const response = await authentication({
      email: email.value,
      password: password.value
    })

    showToast(response.message, 2500)
    authStore.setToken(response.jwtToken)
    // aqui você pode salvar no Pinia se quiser
    // authStore.setUser(response.user)

  } catch (error) {
    authStore.clearToken()
    console.error(error)
    showToast("Usuário ou senha inválidos!", 2500)
  }
}
</script>
