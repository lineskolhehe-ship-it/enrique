<script setup>
import { ref } from 'vue'

const name = ref('')
const message = ref('')

function greet() {
  message.value = `Hello, ${name.value}!`
}
</script>

<template>
  <div>
    <h1>My First Vue App</h1>

    <input
      v-model="name"
      placeholder="Enter your name"
    />

    <button @click="greet">
      Say Hello
    </button>

    <h2>{{ message }}</h2>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 30px;
}

input {
  padding: 8px;
  margin-right: 5px;
}

button {
  padding: 8px 15px;
}
</style>