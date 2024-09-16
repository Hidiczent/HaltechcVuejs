<template>
  <div>
    Hello
    <button @click="handleButtonClick">Toggle Child Button</button>
    <br /><br /><br />

    <ListComponent
      :userProps="user"
      :showButton="showButton"
      @submit="callback"
    />
    <br />
    showText: {{ showText }}
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import ListComponent from "../components/ListRenderingComponent.vue";

const user = reactive<any>({});
const showText = ref("");
const showButton = ref(true); // สร้าง reactive variable เพื่อควบคุมการแสดงปุ่มใน Child Component

function handleButtonClick() {
  showButton.value = !showButton.value; // สลับค่าเพื่อเปลี่ยนสถานะการแสดงปุ่ม
}

function callback(e: any) {
  showText.value = e;
}
</script>

<style></style>
