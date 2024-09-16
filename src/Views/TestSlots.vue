<template>
  <div>
    Slots Component:
    <ChildrencomponentSlot>
      <template v-slot:header> Hello world </template>
    </ChildrencomponentSlot>
    import : {{ Mymessage }}
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import ChildrencomponentSlot from "../components/ChildrencomponentSlot.vue";

const Mymessage = inject("message");
</script>
<style>
* {
  color: black;
}
</style>
