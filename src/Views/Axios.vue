<template>
  <div>
    <h2>Fetch Data by Multiple IDs using Axios</h2>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
    <p v-else>No users found.</p>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, reactive } from "vue";

interface User {
  id: number;
  name: string;
}

const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // รายชื่อไอดีที่ต้องการดึงข้อมูล
const users = ref<User[]>([]);

onMounted(async () => {
  try {
    users.value = await Promise.all(
      userIds.map(async (id) => {
        const response = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        return response.data;
      })
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
