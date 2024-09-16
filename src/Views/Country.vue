<template>
  <div>
    <button @click="setLocale('en')">EN</button>
    <button @click="setLocale('la')">La</button>
    <h1 class="lao-text" style="text-align: center; font-size: 1.5rem">
      {{ $t("message.hello") }}
    </h1>
    <button class="button is-primary" @click="openModal">
      {{ $t("message.button_add") }}
    </button>
    <hr />
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Currency</th>
          <th>Created</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in state.countries" :key="idx">
          <td>{{ idx + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.currency }}</td>
          <td>{{ item.created_at }}</td>
          <td>
            <i class="fas fa-pen" style="width: 50px; color: blue"></i>
            <i class="fas fa-trash" style="color: red"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal" :class="{ 'is-active': isModalActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button
            class="delete"
            aria-label="close"
            @click="isModalActive = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <form @submit.prevent="onSubmit">
            <div class="field">
              <input
                class="input is-link"
                type="text"
                v-model="name"
                placeholder="Please enter name"
                :class="{ 'is-danger': errors.name }"
              />
              <p v-if="errors.name" class="help is-danger">{{ errors.name }}</p>
            </div>
            <div class="field">
              <input
                class="input is-link"
                type="text"
                v-model="currency"
                :class="{ 'is-danger': errors.currency }"
                placeholder="Please enter currency"
              />
              <p v-if="errors.currency" class="help is-danger">
                {{ errors.currency }}
              </p>
            </div>
            <footer class="modal-card-foot">
              <div class="buttons">
                <button type="submit" class="button is-success">
                  Save Data
                </button>
              </div>
            </footer>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { testUseStore } from "../store/testUseStore";

const { state, getAll } = testUseStore();

const validationSchema = yup.object({
  name: yup.string().required("Please enter name."),
  currency: yup
    .string()
    .required("Please enter currency.")
    .max(3, "Currency must be at most 3 characters."),
});

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: name } = useField<string>("name");
const { value: currency } = useField<string>("currency");

const onSubmit = handleSubmit(async (value) => {
  console.log("Submitted values:", value);
});

const isModalActive = ref(false);

const openModal = () => {
  isModalActive.value = true;
};

onMounted(async () => {
  await getAll();
});

const setLocale = (value: string) => {
  localStorage.setItem("locale", value);
  window.location.reload();
};
</script>

<style>

.lao-text {
  font-family: "Noto Sans Lao", sans-serif;
}
</style>
