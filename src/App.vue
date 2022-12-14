<template>
  <div id="app">
    <base-form :tipos="tipousuario" :apps="aplicaciones"> </base-form>
  </div>
</template>

<script>
import BaseForm from "./components/BaseForm.vue";

export default {
  name: "App",
  components: {
    BaseForm,
  },
  data() {
    return {
      tipousuario: [
        { id: 1, tipo: "usuario" },
        { id: 2, tipo: "administrador" },
      ],
      aplicaciones: [
        { id: 1, app: "Gestor" },
        { id: 2, app: "Panel" },
        { id: 3, app: "Experiencia" },
        { id: 4, app: "Requerimientos" },
        { id: 5, app: "Mantenimiento" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
