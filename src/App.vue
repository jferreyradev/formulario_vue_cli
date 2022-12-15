<template>
  <div id="app">
    <base-form @submit="handleClick" :tipos="tipousuario" :apps="aplicaciones">
    </base-form>
    <base-table :tabla="tabla" />
  </div>
</template>

<script>
import BaseForm from "./components/BaseForm.vue";
import BaseTable from './components/BaseTable.vue';

export default {
  name: "App",
  components: {
    BaseForm,
    BaseTable,
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
      tabla:[]
    }    
  },
  methods: {
    handleClick(info) {
      console.log(info)
      this.tabla.push(info)
    }
  }
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
