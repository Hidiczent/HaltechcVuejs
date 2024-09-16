<template>
    <div>
        <div :class="isActive ? 'text-green' : 'text-red'">
            ShowdataTrue
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const isActive = ref(false)

</script>




<style>

.text-green{
  color: green;
}
.text-red{
  color: red;
}
</style>