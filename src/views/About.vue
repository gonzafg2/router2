<template>
  <div class="about">
    <h1>Esta es la página de about</h1>
    <h2 v-if="id">El parámetro recibido es: {{ id }}</h2>
    <h2 v-else>No se renderizó nuestro parámetro</h2>
    <h2>{{ nombre }}</h2>
    <h2>La edad es: {{ edad }}</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    id: {
      type: String,
    },
    nombre: {
      type: String,
    },
    edad: {
      type: Number,
    },
  },
};
</script>
