<!-- src/components/CounterComponent.vue -->
<template>
  <div>
    <p>Count: {{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>
    <br />
    <br />
    <button @click="counterStore.decrement">Decrement</button>
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../store/Counter";

const counterStore = useCounterStore(); // ues store in component

//  call fetchCount funtion
</script>

<style scoped>
button {
  margin-right: 10px;
}
</style>
