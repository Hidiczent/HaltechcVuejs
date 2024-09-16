<template>
    <div>
        props
        <br>
        <ChildrenComponent  :isPropsData="propsData" @someEmit="callback"/><br>
        <button @click="submitPropsData">Enter</button>
        showText:{{showText}}
    </div>
</template>

<script lang='ts' setup> 
import { reactive, ref } from "vue";
import ChildrenComponent from "../components/ChildrenComponent.vue";

    const propsData = reactive<any>({});
    const showText = ref("");
    const submitPropsData = () =>{
        propsData.name="jimmy"
        propsData.surname="southavy"
    }

    const callback = (e:any) =>{
        showText.value = e;
        console.log("Success");
        
    }
</script>

