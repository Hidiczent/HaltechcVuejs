<template>
  <div>
    Children Component {{ props.isPropsData.name }}
    <br />
    {{ props.isPropsData.surname }}
    <!-- Children Component {{props.isPropsData.name}} <br>{{props.isPropsData.surname}} -->
    <br />
    <button @click="$emit('someEmit', 'ok')">Click Emit</button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["isPropsData"]);
// cosnt props =
</script>
