export function useFormatDate() {
  function formatDate(date) {
    if (!date) return ''

    return new Date(date).toLocaleDateString()
  }

  return {
    formatDate
  }
}