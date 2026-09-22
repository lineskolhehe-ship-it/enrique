import { ref, watch, computed } from 'vue'

export function useMembers() {
  const members = ref([])

  // Load saved members
  const savedRecords = localStorage.getItem('members')

  if (savedRecords) {
    members.value = JSON.parse(savedRecords)
  }

  // Save whenever members change
  watch(
    members,
    (newMembers) => {
      localStorage.setItem(
        'members',
        JSON.stringify(newMembers)
      )
    },
    { deep: true }
  )

  // Add member
  function addMember(member) {
    members.value.push(member)
  }

  // Remove member
  function removeMember(id) {
    members.value = members.value.filter(
      member => member.id !== id
    )
  }

  // Change status
  function activateMember(id) {
    const member = members.value.find(
      member => member.id === id
    )

    if (member) {
      member.status = 'Active'
    }
  }

  // Number of members
  const memberCount = computed(() => {
    return members.value.length
  })

  return {
    members,
    addMember,
    removeMember,
    activateMember,
    memberCount
  }
}