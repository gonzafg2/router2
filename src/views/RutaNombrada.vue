<template>
  <div>
    <h1>Esta es una ruta nombrada</h1>
    <h2>{{ color }}</h2>
    <h2>{{ $route }}</h2>
  </div>
</template>

<script>
export default {
  name: "RutaNombrada",
  props: {
    color: {
      type: String,
    },
  },
};
</script>
