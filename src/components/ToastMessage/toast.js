import { ref } from 'vue'

export const visible = ref(false)
export const message = ref('')

export function showToast(text, duration = 3000) {
  message.value = text
  visible.value = true

  setTimeout(() => {
    visible.value = false
  }, duration)
}
