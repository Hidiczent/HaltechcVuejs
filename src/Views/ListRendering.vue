<template>
  <div>
    <h2>Fetch Data Using Axios</h2>
    <ul>
      <li v-for="item in User" :key="item.id">
        {{ item.name }} {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";

// ກຳນົດໂຄງສ້າງຂອງ object
interface items {
  id: number;
  name: string;
  age: number;
}

const User = ref<items[]>([
  { id: 1, name: "Jimmy", age: 19 },
  { id: 2, name: "May", age: 19 },
  { id: 3, name: "Tadam", age: 55 },
  { id: 4, name: "Noun", age: 16 },
  { id: 5, name: "Dalin", age: 21 },
  { id: 6, name: "Nit", age: 21 },
]);
</script>

<style scoped>
li {
  list-style: none;
}
</style>
