import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('jwtToken') || null,
    nome : null 
  }),
  getters: {
    isAuthenticated: (state) => !!state.token, // retorna true se houver token
    hasToken: (state) => state.token !== null && state.token !== '', // verifica se token tem algum valor
    getNome: (state) => state.nome !== null ? nome : 'Bem vindo'
  },
  actions: {
    setToken(newToken , nome ) {
      this.token = newToken
      this.nome = nome 
      localStorage.setItem('jwtToken', newToken)
    },
    clearToken() {
      this.token = null;
      this.nome = null;
      localStorage.removeItem('jwtToken');

    }
  }
})