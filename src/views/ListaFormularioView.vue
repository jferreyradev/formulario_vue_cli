<template>
  <div class="container">
    <h2>Listado de registros cargados y de ejemplo</h2>
    <hr>
    <button @click="getLista">Cargar</button>
    <base-table :tabla="tabla" />
  </div>
</template>

<script>
import BaseTable from '../components/BaseTable.vue';

export default {
  name: "ListaFormularioView",
  components: {
    BaseTable,
  },
  data() {
    return {
      tabla:[],
      URL:"https://63a4d6ac821953d4f2bdb954.mockapi.io/api/v1/vueform"
    }    
  },
  methods: {
    async getLista() {
        await fetch(this.URL).then(response => response.json())
        .then(data => {this.tabla = data})
        .then(data => {console.table(data)})
        .catch(err => console.error(`${err}`))
        .finally(() => {
            console.log("Finalizó la petición de datos remotos...")
        })}
         /*
      console.log(info)
      this.tabla.push(info)
      */
    }
  }
</script>