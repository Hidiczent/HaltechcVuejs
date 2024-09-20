<!-- 
<template>
    <div class="modal" :class="{ 'is-active': isModalAddActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button
              class="delete"
              aria-label="close"
              @click="isModalAddActive = false"
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
</template> -->