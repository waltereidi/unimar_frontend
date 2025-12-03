<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BookCard from '@/components/BookCard/BookCard.vue'

// Lista inicial (somente exemplo com dados repetidos)
const books = ref([])

const itemsPerPage = 10
let page = 1

// Função que carrega mais 10 itens
const loadMore = () => {
  for (let i = 0; i < itemsPerPage; i++) {
    books.value.push({
      id: books.value.length + 1,
      title: "O Hobbit",
      created_at: "2025-12-01",
      thumbnail: "/src/assets/174827825468349bee15244_1748278254_16x9_md.jpg"
    })
  }
}

// Detectar final da página
const handleScroll = () => {
  const bottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10

  if (bottom) {
    loadMore()
  }
}

// Inicialização
onMounted(() => {
  loadMore() // Carrega os primeiros 10
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="w-full bg-white py-10">
    <div class="max-w-5xl mx-auto px-4">

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        <BookCard
          v-for="book in books"
          :key="book.id"
          :title="book.title"
          :created_at="book.created_at"
          :thumbnail="book.thumbnail"
        />
      </div>

      <div class="text-center py-10 text-gray-500 text-lg">
        Carregando mais itens...
      </div>

    </div>
  </div>
</template>
