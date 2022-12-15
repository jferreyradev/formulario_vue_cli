<template>
  <div class="container text-start">
    <div v-if="errores.length>0">
        <h3>Debe completar los siguientes campos</h3>
      <div
        class="alert alert-primary"
        role="alert"
        v-for="(item, i) in errores"
        :key="i"
      >
        {{ item }}
      </div>
    </div>
    <div class="row mb-3">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          aria-label="Nombre"
          v-model.trim="form.nombre"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Apellido"
          aria-label="Apellido"
          v-model.trim="form.apellido"
        />
      </div>
    </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model.trim="form.email"
      />
      <div id="emailHelp" class="form-text">
        Nos comprometemos a no compartir su direccion de correo.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model.trim="form.password"
      />
    </div>

    <div class="mb-3">
      <label class="form-label">Acceso a aplicaciones</label>

      <div class="form-check" v-for="(item, i) in apps" :key="i">
        <input
          class="form-check-input"
          type="checkbox"
          :value="item.id"
          :id="item.id"
          :name="item.app"
          v-model="form.aplicaciones"
        />
        <label class="form-check-label" :for="item.app"> {{ item.app }} </label>
      </div>
    </div>

    <div class="mb-3">
      <label class="form-label">Tipo de usuario</label>
      <select
        class="form-select mb-3"
        aria-label="Default select example"
        v-model.number="form.tipoUsuario"
      >
        <option v-for="(item, i) in tipos" :key="i" :value="item.id">
          {{ item.tipo }}
        </option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary" v-on:click.prevent="validar">
      Enviar
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseForm",
  props: {
    tipos: Array,
    apps: Array,
  },
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        aplicaciones: [],
        tipoUsuario: 0,
      },
      errores: [],
    };
  },
  methods: {
    limpiarForm(){
      this.form.nombre=""
      this.form.apellido=""
      this.form.email=""
      this.form.password=""
      this.aplicaciones=[]
      this.tipoUsuario=0
    },
    validar() {
      this.errores = [];
      for (const key in this.form) {
        if (Object.hasOwnProperty.call(this.form, key)) {
          switch (typeof this.form[key]) {
            case "string":
              this.form[key] === "" ? this.errores.push(key) : null;
              break;
            case "number":
              this.form[key] === 0 ? this.errores.push(key) : null;
              break;
            case "object":
              if (Array.isArray(this.form[key])) {
                this.form[key].length === 0 ? this.errores.push(key) : null;
              }
              break;
            default:
              break;
          }
        }
      }
      setTimeout(()=>{this.errores=[]},3000)
      console.log(this.errores);
      if (this.errores.length===0){
        this.$emit("submit", this.form)        
      }
      
    },
    enviar() {
      console.log(this.form);
      this.$emit("click", this.form)
    },
  },
};
</script>

<style>
</style>