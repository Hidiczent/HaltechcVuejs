<template>
  <div class="todo-list">
    <h1>Add To Do LIst</h1>
    <input v-model="newName" placeholder="Add Name" /><br />
    <input v-model="newSurName" placeholder="Add SurName" /><br />
    <input v-model="newEmail" placeholder="Add Email" /><br />
    <button @click="addTodo">
      {{ todoAdded ? " Cannot Add data" : "Add Data" }}
    </button>

    <div>
      <p>Shown Name: {{ displayedName }}</p>
      <p>Shown SurName: {{ displayedSurName }}</p>
      <p>Shown Email: {{ displayedEmail }}</p>
    </div>
    <button @click="removeLastTodo">Remove Data</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Todo {
  name: string;
  surName: string;
  email: string;
}

const newName = ref<string>("");
const newSurName = ref<string>("");
const newEmail = ref<string>("");
const todos = ref<Todo[]>([]);
const displayedName = ref<string>("");
const displayedSurName = ref<string>("");
const displayedEmail = ref<string>("");
const todoAdded = ref<boolean>(false);

const addTodo = () => {
  if (newName.value && newSurName.value && newEmail.value) {
    todos.value.push({
      name: newName.value,
      surName: newSurName.value,
      email: newEmail.value,
    });
    [displayedName.value, displayedSurName.value, displayedEmail.value] = [
      newName.value,
      newSurName.value,
      newEmail.value,
    ];
    [newName.value, newSurName.value, newEmail.value] = ["", "", ""];
    todoAdded.value = true;
  }
};

const removeLastTodo = () => {
  if (todos.value.length > 0) {
    todos.value.pop();
    const lastTodo = todos.value[todos.value.length - 1] || {
      name: "",
      surName: "",
      email: "",
    };
    [displayedName.value, displayedSurName.value, displayedEmail.value] = [
      lastTodo.name,
      lastTodo.surName,
      lastTodo.email,
    ];
    todoAdded.value = todos.value.length > 0;
  }
};
</script>

<style scoped>
input {
  height: 45px;
  width: 200px;
  margin: 5px;
  color: white;
}
li {
  list-style-type: none;
  margin: 10px 0;
}
button {
  margin: 5px;
}
p {
  font-size: 25px;
}
</style>
