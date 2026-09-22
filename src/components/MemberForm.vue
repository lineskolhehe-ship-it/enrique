<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['add-member'])

const form = reactive({
  name: '',
  email: '',
  role: '',
  joinDate: ''
})

const error = ref('')

function submitForm() {
  if (
    !form.name ||
    !form.email ||
    !form.role ||
    !form.joinDate
  ) {
    error.value = 'Please fill in all fields.'
    return
  }

  const newMember = {
    id: Date.now(),
    name: form.name,
    email: form.email,
    role: form.role,
    joinDate: form.joinDate,
    status: 'Pending'
  }

  emit('add-member', newMember)

  form.name = ''
  form.email = ''
  form.role = ''
  form.joinDate = ''

  error.value = ''
}
</script>

<template>
  <div class="card">
    <h2>Add New Member</h2>

    <form @submit.prevent="submitForm">

      <label>Member Name</label>
      <input
        v-model="form.name"
        type="text"
        placeholder="Enter member name"
        required
      />

      <label>Email</label>
      <input
        v-model="form.email"
        type="email"
        placeholder="Enter email"
        required
      />

      <label>Club Role</label>
      <select v-model="form.role" required>
        <option value="">Select Role</option>
        <option>Member</option>
        <option>Officer</option>
        <option>Treasurer</option>
        <option>President</option>
      </select>

      <label>Join Date</label>
      <input
        v-model="form.joinDate"
        type="date"
        required
      />

      <p v-if="error" class="error">
        {{ error }}
      </p>

      <button type="submit">
        Add Member
      </button>

    </form>
  </div>
</template>