<template>
  <div class="w-full bg-white py-10">
    <div class="max-w-5xl mx-auto px-4">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  h-64">

        <!-- Imagem à esquerda -->
        <div>
          <img 
            src="https://via.placeholder.com/400x300"
            alt="Imagem"
            class="w-full h-auto rounded-xl shadow"
          />
        </div>

        <!-- Texto à direita -->
        <div class="text-center md:text-center">
          <h1 class="text-3xl font-bold mb-4 text-center">
            Título Centralizado
          </h1>

          <p class="text-gray-600 text-lg leading-relaxed">
            Aqui vai o texto explicativo sobre o conteúdo do card ou seção.
            Ele fica alinhado ao centro no desktop e no mobile.
          </p>
        </div>

      </div>

    </div>
  </div>
</template>