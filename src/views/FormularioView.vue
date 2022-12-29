<template>
  <div class="container">
    <h2>Formulario de carga</h2>
    <hr>
    <base-form @submit="handleClick" :tipos="tipousuario" :apps="aplicaciones">
    </base-form>
    <base-table :tabla="tabla" />
  </div>
</template>

<script>
import BaseForm from "../components/BaseForm.vue";
import BaseTable from "../components/BaseTable.vue";

export default {
  name: "FormularioView",
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
      tabla: [],
      URL: "https://63a4d6ac821953d4f2bdb954.mockapi.io/api/v1/vueform",
    };
  },
  methods: {
    handleClick(info) {
      console.log(info);
      this.tabla.push(info);
      this.postData(info);
    },
    async postData(obj) {
      const response = await fetch(this.URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      const respuestaPost = response.json();
      console.log(respuestaPost);
    },
  },
};
</script>
