<template>
  <div>
    ChildrenComponent {{ props.userProps.name }} {{ props.userProps.surname }}

    <button v-if="props.showButton" @click="handleClick">
      Click Me to Emit data
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  userProps: Object,
  showButton: Boolean, // รับ props เพื่อตรวจสอบว่าจะแสดงปุ่มหรือไม่
});

const emit = defineEmits(["submit"]);

function handleClick() {
  emit("submit", "ok");
}
</script>

<style></style>
