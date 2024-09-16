<template>

    <div>
        <div style="background-color:  blueviolet; width: 300px; height: 300px; border-radius: 15px;">
            <p>{{ name }}</p>
            <p>Message is: {{ message }}</p>
            <input v-model="message" placeholder="edit me"
                style="padding-bottom: 20px; width: 200px; text-align: center;" /><br>
            <button @click="ChangeData"> click</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
const name = ref('')
const message = ref('')
const ChangeData = () => {
    name.value = 'jimmy'
}


// life Cycle Hooks
onMounted(()=>{
    console.log("The component is now mounted");
    
})
</script>
<style>

</style>