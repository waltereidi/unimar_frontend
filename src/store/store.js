import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('jwtToken') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token, // retorna true se houver token
    hasToken: (state) => state.token !== null && state.token !== '', // verifica se token tem algum valor
  },
  actions: {
    setToken(newToken) {
      this.token = newToken
      localStorage.setItem('jwtToken', newToken)
    },
    clearToken() {
      this.token = null
      localStorage.removeItem('jwtToken')
    }
  }
})