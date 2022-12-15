<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(value, key, i) in tabla[0]" :key="i">
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in tabla" :key="i">
        <td v-for="(value, key) of item" :key="key">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "BaseTable",
  props: {
    tabla: Array,
  },
  data() {
    return {};
  },
};
</script>