<script setup>
import MemberForm from '../components/MemberForm.vue'
import MemberList from '../components/MemberList.vue'

import { useMembers } from '../composables/useMembers'

const {
  members,
  addMember,
  removeMember,
  activateMember,
  memberCount
} = useMembers()

function handleAddMember(member) {
  addMember(member)
}

function handleDeleteMember(id) {
  removeMember(id)
}

function handleActivateMember(id) {
  activateMember(id)
}
</script>

<template>
  <section class="page">

    <h1>Club Members</h1>

    <p>
      Total Members: <strong>{{ memberCount }}</strong>
    </p>

    <MemberForm
      @add-member="handleAddMember"
    />

    <MemberList
      :members="members"
      @activate-member="handleActivateMember"
      @delete-member="handleDeleteMember"
    />

  </section>
</template>