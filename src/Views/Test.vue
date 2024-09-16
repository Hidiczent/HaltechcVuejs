<template>
  <div>
    ສະບາຍດີປີໃໝ່່ 2024: {{ name }} {{ surname }} <br /><br />
    <!-- show : {{ Jimmy.name }} {{ Jimmy.surname }} {{ author.name }} {{ author.books }} -->
    <span>
      <p>Show: {{ publishedBooksMessage }}</p>
    </span>
    <p v-if="gender == 'male'">Gender:{{ gender }}</p>
    <p v-else-if="gender == 'famale'">Gender:{{ gender }}</p>
    <p v-else>None</p>


    <div>
      <div style="background-color: blue; width: 300px; height: 300;">
        <button @click="ChangeData"> click</button>
        <!-- Binding  -->
        <p>Message is: {{ message }}</p>
        <input v-model="message" placeholder="edit me" />
      </div>
    </div>

    <div>
        <div :class="isActive ? 'text-green':'text-red'" >
            ShowdataTrue
        </div>
    </div>
    <TextComponent />
   
  </div>

  
</template>

<script lang="ts" setup>

import { computed, reactive, ref } from 'vue';
import TextComponent from "../components/TextComponent.vue";

const name = ref('jimmy')
const surname = ref('Southavy')

const gender = ref('famale')



const isActive = ref(true)



const Jimmy = reactive({

  name: 'jimmy',
  surname: 'jimmy',
  items: {
    name: "Hidiczent",
    surname: "Novamber"

  }

})


// Computed properties
const author = reactive({
  name: 'Jimmy',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})


const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})



const message = ref('')

const ChangeData = () => {
  name.value = 'Admin'
}
</script>

<style>

.text-green{
  color: green;
}
.text-red{
  color: red;
}
</style>