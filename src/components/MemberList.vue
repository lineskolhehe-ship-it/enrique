<script setup>
import MemberItem from './MemberItem.vue'

defineProps({
  members: {
    type: Array,
    required: true
  }
})

const emit = defineEmits([
  'activate-member',
  'delete-member'
])

function activateMember(id) {
  emit('activate-member', id)
}

function deleteMember(id) {
  emit('delete-member', id)
}
</script>

<template>
  <div class="card">
    <h2>Members List</h2>

    <p v-if="members.length === 0">
      No members registered yet.
    </p>

    <div v-else>
      <MemberItem
        v-for="member in members"
        :key="member.id"
        :member="member"
        @activate-member="activateMember"
        @delete-member="deleteMember"
      />
    </div>
  </div>
</template>