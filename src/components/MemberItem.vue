<script setup>
import { useFormatDate } from '../composables/useFormatDate'

defineProps({
  member: {
    type: Object,
    required: true
  }
})

const emit = defineEmits([
  'activate-member',
  'delete-member'
])

const { formatDate } = useFormatDate()

function activateMember(id) {
  emit('activate-member', id)
}

function deleteMember(id) {
  emit('delete-member', id)
}
</script>

<template>
  <div class="member">
    <div>
      <h3>{{ member.name }}</h3>

      <p>
        <strong>Email:</strong>
        {{ member.email }}
      </p>

      <p>
        <strong>Role:</strong>
        {{ member.role }}
      </p>

      <p>
        <strong>Join Date:</strong>
        {{ formatDate(member.joinDate) }}
      </p>

      <p>
        <strong>Status:</strong>

        <span
          :class="member.status === 'Active'
            ? 'active'
            : 'pending'"
        >
          {{ member.status }}
        </span>
      </p>
    </div>

    <div class="actions">
      <button
        v-if="member.status !== 'Active'"
        @click="activateMember(member.id)"
      >
        Mark as Active
      </button>

      <button
        class="delete"
        @click="deleteMember(member.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>