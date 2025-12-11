<template>
    <p>{{ nome }}</p>
</template>
<script setup>
    defineProps({
  nome: {
    type: String,
    required: true
  },
 
});

</script>